const express = require("express");

const app = express();

app.get('/', (req, res)=>{
    res.send("Home Page");
})

// to request data from server as per parameter passed to route 
// use "/:parameter_name" after path
app.get('/users/:Id', (req, res)=>{
    // use req.params to see all parameters that are requested
    console.log(req.params);
    // to get data from parameter
    console.log(req.params.Id);

    res.send("Users as per parameter passed "+ req.params.Id);
});

// multiple parameter
app.get('/users/:Id/:profile', (req, res)=>{
    // to send msg to website
    console.log(req.params);
    res.send("This is another example");
}); 

// no compulsory to pass parameter when we use '?' after the parameter
app.get('/users/:Id?', (req, res)=>{
    // to send msg to website

    res.send("This is without parameter passed ");
}); 

// to use more than two parameters with '-' or '.'
app.get('/flights/:From-:To', (req, res)=>{
    console.log(req.params);
    res.send(`Flight data ${req.params.From} To  ${req.params.To}`);
}); 


// app.get('/flights/:From.:To', (req, res)=>{
//     console.log(req.params);
//     res.send(`Flight data ${req.params.From} To  ${req.params.To}`);
// }); 

app.listen(3000);