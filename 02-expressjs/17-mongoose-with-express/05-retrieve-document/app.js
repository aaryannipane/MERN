import express from "express";
import mongoose from "mongoose"
import connectDB from "./db/connectdb.js";
import {studentModel, getAllDoc, getAllDocSpecificField, getSingleDoc, getSingleDocSpecificField, getDocByField, getDocByFieldSpecificField, getLimitedDoc, getSkipDoc, getCountDoc, getSortedDoc, mixDoc, compDoc, logDoc} from "./models/Student.js";

const app = express();
const port = process.env.PORT || "3000";


// connect to database
connectDB();

// get all documents from database 
// getAllDoc();

// Retrieve Specific Field of All Documents
// getAllDocSpecificField();

// Retrieve Single Document
// getSingleDoc();

// Retrieve Single Document with specific field
// getSingleDocSpecificField();

// Retrieve Document by field
// getDocByField();


// Retrieve Document by field with specific field
// getDocByFieldSpecificField();

// Retrieve Limited Document
// getLimitedDoc()


// Retrieve Skip Document
// getSkipDoc()

// Count Document
// getCountDoc();


// Sorted Document
// getSortedDoc();


// mixed query
// mixDoc();


// comparision query operator
// compDoc();


// LOGICAL QUERY
logDoc();


app.listen(port, ()=>{
    console.log(`localhost:${port}`);
})