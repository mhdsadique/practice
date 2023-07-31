

const express=require("express")
const mongoose=require("mongoose")
const { rout } = require("./rout/rout.jsx")
const { connection } = require("./db/db.js")
var cors = require('cors')
var app = express()
app.use(cors())
app.use(express.json())
app.use("/rout",rout)
app.get("/",(req,res)=>{
   res.send("done it is response")
})
app.listen(8010,async()=>{
   console.log("server running 8010")
   try{
   await connection
     console.log("server connected to db");
   }catch(e){
     console.log(e)
     console.log("server not   connected to db");
   }
})

