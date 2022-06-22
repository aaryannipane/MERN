import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/connectdb.js";
import router from "./routes/web.js";

const app = express();
const port = process.env.PORT || "3000";

// set view engine
app.set("view engine", "ejs");


app.use(express.urlencoded({extended:true}));

// connect to database
connectDB();



app.use("/", router);



app.listen(port, ()=>{
    console.log("Server running on port 3000");
})