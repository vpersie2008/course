//引入文件系统模块
var fs = require('fs');

//1. 删除一个已存在的文件

fs.unlink('write.txt',function(err){
    if (err){throw err;}
    console.log('文件删除成功');
})

// 2. 创建文件夹,读取文件并写入创建文件夹中：
fs.mkdir('stuff',function(){
    fs.readFile('read.txt','utf8',function(err,data){
        if(err){throw err;}
        fs.writeFile('./stuff/writeMe.txt',data,function(err){
            if(err){throw err}
            console.log('文件写入成功');
        });
    });
});

//3. 异步删除文件夹,非空文件夹不允许之间删除，必须先删除文件，再删除文件夹
fs.rmdir('stuff',function(err){
    if(err){
        throw err;
    }
    console.log('文件夹删除成功')
});


// 4. 所以必须先删除文件，再删除文件夹
fs.unlink('./stuff/writeMe.txt',function(err){
    if (err){throw err;}
    fs.rmdir('stuff',function(err){
        if(err){
            throw err;
        }
        console.log('文件夹删除成功')
    });
})