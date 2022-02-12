import express from 'express'
import home from './routes/home.js'
import {join} from 'path'

const app = express()

// static files
// app.use(express.static('public'))
// app.use(express.static(join(process.cwd(),'public')))
app.use('/static', express.static(join(process.cwd(),'public')))

const options ={
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', "html"],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}

app.use(express.static(join(process.cwd(),'public'), options))

// load routes
app.use('/', home)

app.listen(3000)