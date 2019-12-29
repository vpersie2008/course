//当前文件的路径，不包含文件名
console.log(__dirname);

//当前文件的路径，包含文件名
console.log(__filename);

//时间相关

setTimeout(function () {
    console.log('1s 后打印');
}, 1000);

var timer = 0;
var interval = setInterval(function () {
    timer++;
    if (timer > 3) {
        console.log('大于3次，跳出了，关闭定时器');
        clearInterval(interval);
    }
}, 2000);
