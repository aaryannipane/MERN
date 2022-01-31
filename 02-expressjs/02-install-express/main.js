'use strict';

// to use express import it to this file

const express = require('express');

// now we have to create object of the express
const app = express();

// now we can use all the methods of express by app object 
console.log(app);

// we have to use GET method to get data from page and to manage requests and responses
app.get('/', (req, res)=>{
    // to send msg to website
    res.send("Hello World");
}); 

// for users route  
app.get('/users', (req, res)=>{
    // to send msg to website
    res.send("Users Page");
});

// listen to any port number
app.listen(3000, ()=>{console.log("Server running at port 3000")});

// LEARN MORE AT : https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
