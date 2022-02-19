import express from 'express'
import {join} from 'path'
import web from './routes/web.js'
import ejs from 'ejs'
import underConstruction from './middlewares/uc-middleware.js'

const app = express()

// set template files
app.set('views', './views')

// set template engine
app.set('view engine', ejs)

// use static files
app.use(express.static(join(process.cwd(), 'public')))

// middleware for underconstruction
// app.use(underConstruction)

// application level underconstruction
app.use('/about', underConstruction)

app.use('/', web)


app.listen(3000, ()=>{
    console.log("Server running at 3000");
})