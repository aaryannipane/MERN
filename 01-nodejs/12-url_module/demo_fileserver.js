var http = require('http');
var url = require('url');
var fs = require('fs');

// create server
http.createServer(function(req, res){
    // get the requested url and parse it to readable format
    var q = url.parse(req.url, true);

    var filename = "."+q.pathname;

    // // read that file requested
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end("404 Not Found");
        }

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });

    // res.write('Server started');
    // res.end();
}).listen(8080);