
const express=require("express")
const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:String,
    age:Number
})
const UserModel=mongoose.model("dummy",userSchema)
module.exports={UserModel}