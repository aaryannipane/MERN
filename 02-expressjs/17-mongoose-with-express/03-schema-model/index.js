import express from 'express'
import connectDB from './db/connectdb.js'
import mongoose from 'mongoose'
import "./models/Student.js"

const app = express()
const port = process.env.PORT || '3000'

// connecting database
connectDB();

app.get('/', (req, res)=>{
    res.send("Hello");
})

app.listen(port, ()=>{
    console.log("connected to server");
})
