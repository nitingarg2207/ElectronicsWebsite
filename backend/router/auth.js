const express = require("express")
const router =express.Router()
const bcrypt = require("bcryptjs")

const User = require("../models/UserSchema")
const Product = require("../models/products")

const middleware = (req,res,next)=>{
    console.log("hello from middleware")
    next()
}

router.get("/about",middleware,(req,res)=>{
    res.send("hello")
})

router.post("/user/register",async(req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        return res.status(422).json({ error:"please fill data properly" })
    }
    const userExist = await User.findOne({email:email})
    if(userExist) {
        return res.status(422).json({ error:"email already exists" })
    }
    else{
        const user = new User({name,email,password})
        const userRegister = await user.save()
        if(userRegister){
            res.status(201).json({message:"user registered successfully"})
        }
        else{
            res.status(500).json({message:"failed to register user"})
        }
    }
})

router.post("/user/login", async(req,res)=>{
    try{
        let token;
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"Please fill the data"})
        }

        const userLogin = await User.findOne({email:email})
        if(!userLogin){
            res.status(400).json({error:"user error"})
        } else{
            const isMatch = await bcrypt.compare(password,userLogin.password)
            if(!isMatch){
                res.status(400).json({error:"user error"})
            } else{
                token = await userLogin.generateAuthToken()
                console.log(token)
                res.cookie("jwtoken",token,{
                    exprires:new Date(Date.now() + 25892000000),
                    httpOnly:true
                })
                res.status(201).json({message:"user signin Successfully"})
            }
        }
    }
    catch(err){
        console.log(err)
    }
})

router.get("/user/products",async(req,res)=>{
    const data = await Product.find()
    res.send(data)
})

router.get(`/user/products/:product_id`,async(req,res)=>{
    const id = req.params.product_id
    const data = await Product.findOne({_id:id})
    res.send(data)
})

router.get("/",(req,res)=>{
    res.json({"message":"hi"})
})

module.exports = router