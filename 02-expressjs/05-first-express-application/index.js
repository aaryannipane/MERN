// import express module
// const express = require('express');   // when "type":"module" don't use this

import express from 'express'  //ES6 import 

// create app object which is used in node http  as callback
const app = express();   

const port = 3000;

// route and get the req
app.get('/', (req, res)=>{
    // send response 
    res.send('Hello Aryan');
})

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})