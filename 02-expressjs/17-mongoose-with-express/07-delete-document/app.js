import express from "express";
import mongoose from "mongoose"
import connectDB from "./db/connectdb.js";
import {deleteDocById, deleteDocOne} from "./models/Student.js";

const app = express();
const port = process.env.PORT || "3000";


// connect to database
connectDB();

// deleteDocById("62ae08a29ea459861eca5829");

// delete one document
// deleteDocOne(27)


app.listen(port, ()=>{
    console.log(`localhost:${port}`);
})