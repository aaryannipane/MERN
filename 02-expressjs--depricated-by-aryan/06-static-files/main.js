const express = require('express');

const app = express();

// make public folder as static folder in express to use file inside that folder by html file
// when using this as public path we don't need to write public inside html paths
// app.use(express.static('public'));

// create virtual path that it will not show the real path to users
// when we are using virtual path we had to write virtual path xyz in path name at first inside html file
app.use('/xyz', express.static('public'));

app.get('/', (req, res)=>{
    // to send file to website
    res.sendFile(__dirname+"/index.html");
}); 

app.listen(3000, ()=>{console.log("Server listening on port 3000")}); 