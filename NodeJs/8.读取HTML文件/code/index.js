var fs = require('fs');
var http = require('http');
var server  = http.createServer(function(req,res){
    // res.writeHead(200,{'content-type':'text/plain'});
    res.writeHead(200,{'content-type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(res);
});

server.listen(3000,'localhost');
console.log('Server is running!');




