const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const stream = fs.createReadStream("./data.json");
    stream.pipe(res);
})

server.listen("3000", ()=>{
    console.log("server running on port 3000")
})