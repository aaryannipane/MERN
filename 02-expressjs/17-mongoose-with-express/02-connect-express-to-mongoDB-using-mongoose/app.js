import express from 'express'

// import mongoose
// const mongoose = require('mongoose')  // old method
import mongoose from 'mongoose'  // es6 method

import { getConnection } from './db/dbConnection.js'

const app = express()

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/test').then(()=>{
//     console.log('Connected MongoDb');
// })

// getConnection()

// mongoose.connect('mongodb://localhost/test');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("Connected");
// });


getConnection()



app.listen(3000, ()=>{
    console.log("Server running at port 3000");
})