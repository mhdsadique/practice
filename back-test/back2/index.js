const express =require("express")

const app =express()



app.get("/",(req,res)=>{
    res.send("done")
})

app.listen(8000,()=>{
    console.log("connected")
})
