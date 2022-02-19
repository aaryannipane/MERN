import express from 'express'
import {join} from 'path'
import web from './routes/web.js'
import ejs from 'ejs'

const app = express()

// set template files location  
app.set('views', './views')

// set template engine
app.set('view engine', ejs)

// load static/public files
app.use('/static', express.static(join(process.cwd(), 'public')))

// use routes
app.use('/', web)

app.listen(3000, ()=>{
    console.log("Server running at port 3000");
})