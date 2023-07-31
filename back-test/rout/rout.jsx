
const router=require("express");
const { Usermodel } = require("../model/model");

const rout=router.Router()

rout.get("/",async(req,res)=>{
    const body=req.query
  try{
    const data=await Usermodel.find(body)
      res.send(data)
    // res.send("get done")
  }catch(c){
    res.send(c);
  }
})

rout.post("/",async(req,res)=>{
    const body=req.body
    try{
        const save=new Usermodel(body)
      await save.save()
        res.send("product saved")

    }catch(e){
        console.log(e);
        res.send(e)
    }
})

module.exports={rout}