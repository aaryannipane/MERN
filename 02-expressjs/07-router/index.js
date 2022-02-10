import express from 'express'

// import routes
// const stud = require('./routes/student.js');
// const teach = require('./routes/teacher.js');
// NEW METHOD 
import stud from './routes/student.js'
import teach from './routes/teacher.js'

const app = express()
const port = 3000;

// load router modules
app.use('/student', stud)
app.use('/teacher', teach)




app.listen(port);