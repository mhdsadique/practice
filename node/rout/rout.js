const express=require('express')
const rout=express.Router()
const {UserModel}=require("../model/model")

rout.get("/",async(req,res)=>{
     const query=req.query
     const user=await UserModel.find(query)
     res.send(user)
})
rout.post("/",async(req,res)=>{
    const query=req.body
    const user=new UserModel(query)
    await user.save()
    res.send("product saved")
})
module.exports={rout}