

const express =require("express")
const mongoose=require("mongoose")
const { rout } = require("./rout/rout")
const app=express()
app.use(express.json())
app.use("/dum",rout)
app.get("/",(req,res)=>{
    res.send("done")
})
app.listen(8100,async()=>{
    console.log("done port running 8100")
    try{
    mongoose.connect("mongodb://127.0.0.1:27017/dummy")
   console.log("done connected to database")
}catch(e){
        console.log(e)
    }
})