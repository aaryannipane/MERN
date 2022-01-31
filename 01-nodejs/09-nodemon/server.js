var http = require('http');

var server = http.createServer((req, res)=>{

    res.writeHead(200, {'content-type':'text/html'});
    res.write("<strong>Server is running</strong>")

    res.end();

}).listen(3000, ()=>{console.log("Server running at port 3000")});