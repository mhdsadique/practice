

const mongoose=require("mongoose")


const model= mongoose.Schema({
    name:String,
    age:Number

})
const Usermodel=mongoose.model("dummy",model)

module.exports={Usermodel}