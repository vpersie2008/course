//引入文件系统模块
var fs = require('fs');

// 异步读取文件
fs.readFile('read.txt', function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});

//异步读取文件后写入
fs.readFile('read.txt', function (err, data) {
    if (err) {throw err;}

    fs.writeFile('write.txt',data, function(err){
        if(err){throw err;}

        console.log('写入文件成功');
    });
});
