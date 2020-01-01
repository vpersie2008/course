var fs = require('fs');
// var myReadStream = fs.createReadStream(__dirname + '/read.txt');
// var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

// //使用pipe 来写入流，即可用于写文件，也可以用于输出纯文本
// //将可读流倾倒到可写流
// myReadStream.pipe(myWriteStream);

//如何使用pipe将流倾倒到页面上？
//通过使用http server

var http = require('http');
var server  = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/read.txt','utf8');
    myReadStream.pipe(res);
});

server.listen(3000,'localhost');
console.log('Server is running!');




