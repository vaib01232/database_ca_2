const Mongoose = require('mongoose');

const resSchema=new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    itemsArr:{
        type:[ObjectId],
    }
})

const resModel=new Mongoose.model('restaurants',resSchema)
module.exports=resModel