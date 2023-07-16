

const mongoose=require("mongoose")

const userScema=mongoose.Schema({
    name:String,
    age:Number
})

const UserModele=mongoose.model("dum2",userScema)

module.exports={UserModele}