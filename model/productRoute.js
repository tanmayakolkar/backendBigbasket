import mongoose from "mongoose";


let product=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    qty:{type:Number,required:true},
    info:{type:String,required:true},
    image:{type:String,require:true}
})

export default mongoose.model("product",product,"product")