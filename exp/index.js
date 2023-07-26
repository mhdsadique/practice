
const express=require("express")
const mongoose=require("mongoose")

const app=express()
app.get("/",(req,res)=>{
res.send("done data has come")
})
app.listen (8000,async()=>{
    console.log("running")
try{
   console.log("done connect")
await mongoose.connect("mongodb://127.0.0.1:27017/dummy")
}catch(e){
}})
