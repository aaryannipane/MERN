import {join} from 'path'

const studentAll = (req, res)=>{
    // gives parent folder (10-views)
    console.log(process.cwd())
    res.sendFile(join(process.cwd(), 'views', 'student.html'));
}

export { studentAll }