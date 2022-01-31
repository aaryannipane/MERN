// requiring hhtp module or file in our file 
// http module is used to create server like xampp or wampp in php
const http = require("http");

// there is function in http module to create Server
const server = http.createServer(function(req, res){
    
    // wriehead is use to define  content type of what we are writing
    // writeHead(status, {content-type})
    res.writeHead(200, {"content-type":"text/plain"});
    // res.writeHead(200, {"content-type":"text/html"});   // for html coding

        // prints on screen
        res.write("<h1>Server is on...\nlistening to port 3000</h1>");

    // end of response
    res.end();

}).listen(3000, ()=>{console.log("Server Running on port 3000");});
// server listening to port 3000