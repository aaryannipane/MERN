import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/connectdb.js";
import path from "path";
import router from "./routes/web.js";

const app = express();
const port = process.env.PORT || "3000";

// make connection with database
connectDB();


// middleware to use form data in express
app.use(express.urlencoded({extended:false}));

// to use static files
app.use('/', express.static(path.join(process.cwd(), "public")));
app.use('/edit', express.static(path.join(process.cwd(), "public")));

// set template engine
app.set("view engine", "ejs");


// use router
app.use("/", router);





app.listen(port, ()=>{
    console.log(`localhost:${port}`);
})