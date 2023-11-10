import express from "express";
import mongoose from "mongoose";
import mongodburl from "./config/dbConfig.js";
import productRoute from "./router/productRoutes.js";

var app = express();
app.use(express.json());
app.use('/api',productRoute);

mongoose.connect(mongodburl).then(() => {
    console.log("database connected");
    app.listen(5000, ()=> {
        console.log("server connect")
    })
}).catch((error)=>{
    console.log("errror")
});
