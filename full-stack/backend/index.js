
const express=require("express")
const mongoose=require("mongoose")
const { userouter } = require("./rout/rout")
const app=express()

app.use(express.json())
app.use("/rout",userouter)
app.get("/",(req,res)=>{
    res.send("suceeass")
})

app.listen(8000,async()=>{
    console.log("port running 8000");
     try{
      mongoose.connect("mongodb://127.0.0.1:27017/dummy")
        console.log("connected to db");  
     }catch(e){
        console.log(e)
     }
})