// import express 
const express = require('express');

// create app or object or initialize
const app = express();

// give port no 
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.listen(port, ()=>{
    console.log('App listening to port 3000')
})