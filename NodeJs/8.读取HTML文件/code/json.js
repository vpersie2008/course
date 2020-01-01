var fs = require('fs');
var http = require('http');
var server  = http.createServer(function(req,res){
    // res.writeHead(200,{'content-type':'text/plain'});
    //res.writeHead(200,{'content-type':'text/html'});
    console.log('客户端向服务端发送请求: ' + req.url);
    res.writeHead(200,{'content-type':'application/json'});
    var myReadStream = fs.createReadStream(__dirname + '/person.json','utf8');
    myReadStream.pipe(res);
});

server.listen(3000,'localhost');
console.log('Server is running!');


// 注意,这里是两次请求，第一次是 /, 第二次是 /favicon.ico
// 如果向不请求 /favicon.ico 可以按如下操作
//加上 req.url !== '/favicon.ico', 再去 pipe 数据



