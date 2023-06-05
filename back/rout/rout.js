
const express=require("express")
const rout=express.Router()
const { UserModel } = require("../model/model")
rout.get("/",async(req,res)=>{
    const reqe=req.query
try{
const data=await UserModel.find(reqe)
    res.send(data)
}catch(e){ res.send(e)}})
rout.post("/",async(req,res)=>{
    const quer=req.body
    const user=new UserModel(quer)
   await  user.save()
     res.send("product saved")
})

rout.delete("/:id",async(req,res)=>{
    const id=req.params.id
    try{

     await   UserModel.findByIdAndDelete({_id:id})
        res.send("product deleted")
    }catch(e){
        res.send(e)
    }
})
rout.patch("/:id",async(req,res)=>{
    const pay=req.body
    const id=req.params.id
    try{
       await UserModel.findByIdAndUpdate({_id:id},pay)
        res.send("product hase been updated patched")
    }catch(e){
   res.send(e)
    }})
rout.put("/:id",async(req,res)=>{
    const pay=req.body
    const id=req.params.id
    try{
       await UserModel.findByIdAndUpdate({_id:id},pay)
        res.send("product hase been puted")
    }catch(e){
   res.send(e)
    }})
module.exports={rout}