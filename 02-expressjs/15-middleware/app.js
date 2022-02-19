import express from 'express'
import {join} from 'path'
import web from './routes/web.js'
import ejs from 'ejs'
import mylogger from './middlewares/logger-middleware.js'

const app = express()

// set template files
app.set('views', './views')

// set template engine 
app.set('view engine', ejs)

// use static file
app.use('/static', express.static(join(process.cwd(), 'public')))

// APPLICATION LEVEL MIDDLEWARE
// for all path
// app.use(mylogger)

// only for all /about path
// app.use('/about', mylogger)

// use route
app.use('/', web)


// 
app.use('/', web)


app.listen(3000, ()=>{
    console.log("Server running at 3000");
})