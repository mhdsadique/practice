
const express=require("express")
const mongoose=require("mongoose")
const { rout } = require("./rout/rout")
const app=express()

app.use(express.json())
app.use("/dum",rout)
app.get("/",(req,res)=>{
    res.send("done get")
})

app.listen(8001,async()=>{
    try{
    mongoose.connect("mongodb://127.0.0.1:27017/dummy")
        console.log("connected bto db done")
    }catch(e){
        console.log(e)
    }
    console.log("done")
})  

