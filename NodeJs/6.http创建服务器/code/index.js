// 通过http 模块，创建本地服务器

var http = require('http');

//创建服务器方法
var server = http.createServer(function(req,res){
    console.log("客户端向服务器发送请求: " + req.url);
    res.writeHead(200,{"content-type":"text/plain"});
    res.end('Server is working!');
});

server.listen(3000,"localhost");

console.log("server is runnning!");

