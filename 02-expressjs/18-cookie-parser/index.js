import express from 'express'
import cookieParser from 'cookie-parser';
import web from './routes/web.js'

const app = express();
const port = process.env.PORT || '3000';

// cookie parser
app.use(cookieParser());

app.use('/', web);


app.listen(port, ()=>{
    console.log("server running on port no " + port);
})