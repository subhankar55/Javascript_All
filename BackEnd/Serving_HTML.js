const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('Introduction.html');

const server = http.createServer((req, res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent);
})
// If we open 127.0.0.1 ip we must find the page loaded
server.listen(80, '127.0.0.1',()=>{
    console.log("Listening on port 80");
})