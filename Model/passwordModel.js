const mongoose =require('mongoose')

const passwordSchema = new mongoose.Schema({
    website:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const PASSWORD= mongoose.model('password',passwordSchema)

module.exports=PASSWORD