const express = require('express');

const app = express();


app.get('/', (req, res)=>{
    res.send('<h1 style="margin: 10rem 0;font-size: 5rem; font-family: sans-serif;">Hello Express Routing</h1>');
})

// this route path will match 'acd' and 'abcd' patterns
app.get('/ab?cd', (req, res)=>{
    res.send('ab?cd');
})

// this route path will match 'abcd', 'abbcd','abbbcd' and so onn
app.get('/ab+cd', (req, res)=>{
    res.send('ab+cd');
})

// this route path will match 'abcd', 'abxcd','abRANDOMcd', 'ab123cd' and so onn
app.get('/ab*cd', (req, res)=>{
    res.send('ab*cd');
})

// this route path will match '/abe' and '/abcde'
app.get('/ab(cd)?e', (req, res)=>{
    res.send('ab(cd)?e');
})

// this route path will match anything with an 'a' in it
app.get(/a/, (req, res)=>{
    res.send('/a/');
})

// this route path will match butterfly and dragonfly but not butterflyman, dragonflyman and so on
app.get(/.*fly$/, (req, res)=>{
    res.send('/.*fly$/');
})


app.listen(8080, ()=>{console.log('Server running on port 8080')});