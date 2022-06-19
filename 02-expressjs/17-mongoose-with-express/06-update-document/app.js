import express from "express";
import mongoose from "mongoose"
import connectDB from "./db/connectdb.js";
import {updateDocById, updateSingleDoc, updateManyDoc} from "./models/Student.js";

const app = express();
const port = process.env.PORT || "3000";


// connect to database
connectDB();


// update doc by id
// updateDocById("62ae08a29ea459861eca5829");


// update single document
// updateSingleDoc("62ae08a29ea459861eca5829");


// update many documents
// updateManyDoc(50);


app.listen(port, ()=>{
    console.log(`localhost:${port}`);
})