const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
 
const app = express();

// import routes
const postsRoute = require('./routes/posts');

// (MIDDLEWARES)
app.use(cors()); // for cross domain acess to out api 

// to parse the post data into json
app.use(bodyParser.json());

// middleware
app.use("/posts", postsRoute);

// routes
app.get('/', (req, res)=>{
    res.send("This is home page");
})



// database connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (err)=>{
    if(err) throw err;
    console.log("Connected to database")
})


app.listen("3000", ()=>{
    console.log("server running at port 3000");
})