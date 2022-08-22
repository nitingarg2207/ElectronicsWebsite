const express=require("express")
const bcryptjs=require("bcryptjs")
const dotenv=require("dotenv")
dotenv.config({path:'./config.env'})
const mongoose=require("mongoose")
const port=5000
const DB=`mongodb+srv://nitin22:nitingarg22@cluster0.gfsttvc.mongodb.net/mernstack?retryWrites=true&w=majority`
mongoose.connect(DB).then(()=>{
    console.log("connection is successful")
}).catch((err)=>{
    console.log((err))
})

const app=express()

app.use(express.json())
app.use(require('./router/auth'))

app.listen(port,()=>{
    console.log(`App is running at port:${port}`)
})