const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
 
const app = express();

// import routes
const postsRoute = require('./routes/posts');


// middleware
app.use("/posts", postsRoute);

// routes
app.get('/', (req, res)=>{
    res.send("This is home page");
})



// database connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=>{
    console.log("Connected to database")
})


app.listen("3000", ()=>{
    console.log("server running at port 3000");
})