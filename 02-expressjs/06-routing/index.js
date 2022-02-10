// const express = require('express');
import express from 'express' 
const app = express();
const port = 3000;

// ROUTING

// normal string path
app.get('/home', (req, res)=>{
    res.send('Hello This is routing');
})

// routing for all http request
// app.all('/sabkuch', (req, res)=>{
//     res.send('All method')
// })

// routing for page not found 
// app.all('*', (req, res)=>{
//     res.send('page not found');
// })


// prefix routing
// app.all('/api/*', (req, res)=>{
//     res.send('API Page');
// })


// string pattern path
// app.get('/ab?cd', (req, res)=>{
//     res.send("this route path will match acd and abcd");
// })

// regular expression path
// app.get(/a/, (req, res)=>{
//     res.send('this is a');
// })

// callback examples
app.get('/', (req, res)=>{
    res.send('One callback');
})


// callback examples
// app.get('/callback2', (req, res, next)=>{
//     console.log('first callback');
//     next();
// }, (req, res)=>{
//     console.log('second callback')
//     res.send('Second callback')
// })


// an array of callback
const c1 = (req, res, next)=>{
    console.log('First Callback');
    next();
}
const c2 = (req, res, next)=>{
    console.log('Second Callback');
    next();
}
const c3 = (req, res)=>{
    res.send('This is array of callback');
}

app.get('/callback3', [c1, c2, c3]);


// chained route callbacks

// app.route('/student')
//     .get(function (req, res) {
//         res.send('AIl Student')
//     })
//     .post(function (req, res) {
//         res.send('Add New Student')
//     })
//     .put(function (req, res){
//         res.send('Update Student')
//     })

// use full in api validations

// app.route('/student')
//     .all(function (req, res){
//         console.log('runs for all HTTP verbs first')
//     })
//     .get(function (req, res){
//         res.send('All Student')
//     })
//     .post(function (req, res){
//         res.send('Add New Studet')
//     })
//     .put(function (req, res) {
//         res.send('Update Student')
//     })



app.listen(port, ()=>{
    console.log("server is listening at port "+ port);
});