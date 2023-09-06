


const {UserModele}=require("../model/model")
const express=require("express")
const userouter=express.Router()

userouter.get("/",async(req,res)=>{
    const query=req.query
    const user=await UserModele.find(query)
    res.send(user)
})
userouter.post("/",async(req,res)=>{
    const data=req.body
    try{
        console.log(data)
        const datanew=new UserModele(data)
     await  datanew.save()
        res.send("datas added")
    }catch(e){
        res.send(e)
    }
})

module.exports={userouter}

