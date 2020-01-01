//事件模块

//1.引入事件模块
var events = require('events');

//2.创建EventEmiter对象
var myEventEmitter = new events.EventEmitter();

//3.注册事件，同步
myEventEmitter.on('someEvent',function(msg){
    console.log('注册事件: ' + msg);
});

//4.触发事件
myEventEmitter.emit('someEvent',"将参数传递到事件中");

//先打印我还是先打印事件
console.log(1);

