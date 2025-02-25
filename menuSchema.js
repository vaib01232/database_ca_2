const Mongoose = require('mongoose');

const itemSchema=new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const itemModel=new Mongoose.model('items',itemSchema)
module.exports=itemModel