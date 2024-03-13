const mongoose=require('mongoose')
const modelSchema=mongoose.Schema({
    name:{
        type:String
    },
    dep:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:Image
    }

})
const methodModel=mongoose.model('card',modelSchema)
module.exports=methodModel