import express from 'express'

const app = express()


// ROUTE PARAMETER
app.get('/student/:id', (req, res)=>{
    const dataObj = req.params;
    const id = dataObj.id;
    res.send(id);
})

app.get('/product/:category/:id', (req, res)=>{
    const dataObj = req.params;
    const category = dataObj.category;
    const id = dataObj.id;
    res.send(id + " " + category);
})

app.get('/product/order/:year/and/:month', (req, res)=>{
    const dataObj = req.params;
    const year = dataObj.year;
    const month = dataObj.month;
    res.send(year + " " + month);
})

app.get('/train/:from-:to', (req, res)=>{
    const dataObj = req.params;
    const from = dataObj.from;
    const to = dataObj.to;
    res.send(from + " " + to);
})

app.get('/location/:state.:city', (req, res)=>{
    const dataObj = req.params;
    const state = dataObj.state;
    const city = dataObj.city;
    const data = JSON.stringify(dataObj);
    res.send(state + " " + city + "<br>" + data);
})


// route parameter with regx

app.get('/teacher/:tid([0-9]{2})', (req, res)=>{
    // http://localhost:3000/teacher/20
    const dataObj = req.params;
    const tid = dataObj.tid;
    const data = JSON.stringify(dataObj);
    res.send(tid + "<br>" + data);
})

app.get('/employee/:ename([a-z])', (req, res)=>{
    // http://localhost:3000/employee/aryan
    const dataObj = req.params;
    const ename = dataObj.ename;
    const data = JSON.stringify(dataObj);
    res.send(ename + "<br>" + data);
})

app.get('/:type(article|post)/:id', (req, res)=>{
    // http://localhost:3000/post/12
    // http://localhost:3000/article/20
    const dataObj = req.params;
    const data = JSON.stringify(dataObj);
    res.send(dataObj.type + "<br>" + data);
})


// route paramater
// app param
app.param('id', (req, res, next, id)=>{
    console.log(`ID : ${id}`);
    next();
})
app.get('/user/:id', (req, res, next)=>{
    console.log("user id path 1");
    next();
})
app.get('/user/:id', (req, res)=>{
    console.log("user id path 2");
    res.send("All OK");
})


// QUERY STRING
app.get('/account', (req, res)=>{
    console.log(req.query);
    const data = JSON.stringify(req.query);
    res.send(data);
})

app.listen(3000);