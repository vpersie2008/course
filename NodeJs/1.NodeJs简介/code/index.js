//阻塞代码示例
var fs = require('fs');
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("读取文件结束");

//非阻塞代码示例
fs.readFile('input.txt',function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data.toString());
    }
});

console.log("异步读取文件结束");