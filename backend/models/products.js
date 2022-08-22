const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    mrp:{
        type:mongoose.Types.Decimal128,
        required:true
    },
    price:{
        type:mongoose.Types.Decimal128,
        default:this.mrp
    },
    images:[
        {
            type:String,
        }
    ],
    description:
    {
        type:String,
        default:""
    }
})

const products = mongoose.model('PRODUCTS',productsSchema)
module.exports = products