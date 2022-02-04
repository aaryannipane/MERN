const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('This is root Route');
});

// route for /user 
app.get('/user', (req, res)=>{
    res.send('This is User Route');
})

// route for /user/profile
app.get('/user/profile', (req, res)=>{
    res.send('This is /user/profile route');
})

// route for /user/data with post it will be not accessed by url it can be access when we create forms
app.post('/user/data', (req, res)=>{
    res.send('This is /user/data route');
})


app.listen(3000, ()=>{console.log('Server is running on port 3000')});