var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/read.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

// readStream 触发的事件必须是data，它会一块一块的将数据以chunk形式搬运
var counter = 0;
myReadStream.on('data',function(chunk){
    counter++;
    //console.log("===================正在接收一部分数据======================");
    console.log("===================正在接收第:"+ counter +"部分数据======================");
    myWriteStream.write(chunk);
});

//使用pipe 来写入流，即可用于写文件，也可以用于输出纯文本




