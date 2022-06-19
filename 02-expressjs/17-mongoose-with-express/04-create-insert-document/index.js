import express from "express";
import mongoose from "mongoose"
import connectDB from "./db/connectdb.js";
import studentModel from "./models/Student.js";

const app = express();
const port = process.env.PORT || "3000";


// connect to database
connectDB();

// create document
app.get("/createDocument", async (req, res)=>{

    const studentDoc = studentModel({
        name:"Bheem",
        age:27,
        comment:[{value:"average student"}, {value:"eat so much ladooo"}]
    });

    try{
        const docSave = await studentDoc.save();
        res.json(docSave);
    }
    catch(err){
        res.json(err)
    }


})


app.listen(port, ()=>{
    console.log(`localhost:${port}`);
})