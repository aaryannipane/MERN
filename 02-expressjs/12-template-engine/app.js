import express from 'express'
import {join} from 'path' 
import web from './routes/web.js'
import ejs from 'ejs'

const app = express()

// setup the directory where template files are located
app.set('views', './views')

// set up the template engine use
app.set('view engine', 'ejs')

// load static file
app.use('/static', express.static(join(process.cwd(), 'public')))

app.use('/', web);


app.listen(3000, ()=>{
    console.log("Server running at port 3000");
})