import express from "express"
import mongoose from "mongoose"
import connectDB from "./db/connectdb.js";


const app = express();
const port = process.env.PORT || '3000'

connectDB();


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})