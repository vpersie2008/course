//引入文件系统模块
var fs = require('fs');

//同步读取文件
var readMe = fs.readFileSync('read.txt','utf8');

console.log(readMe.toString());

fs.writeFileSync('write.txt',readMe);



