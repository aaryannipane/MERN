const express = require('express');
const multer = require('multer');
const cors = require("cors");

const app = express();
const port = process.env.PORT || "3000";

app.use(cors());

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './fileData');
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + '--' + file.originalname)
    }
})

const upload = multer({storage: fileStorageEngine});



app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
})

// to upload  single image file (image is used for name or key used in form input)
app.post('/single', upload.single("image"), (req, res)=>{
    console.log(req.file);
    // res.status(200).send(`Single file upload success ${req.file.path}`);
    res.status(200).json(req.file.path);
})


// to upload multiple files (3 is there for 3 images to upload)
app.post('/multiple', upload.array("images", 3), (req, res)=>{
    console.log(req.files);
    res.send("Multiple files upload success");
})




app.listen(port);