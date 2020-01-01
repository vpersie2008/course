//事件模块

//1.引入事件模块
var events = require('events');

//2.创建EventEmiter对象
var myEventEmitter = new events.EventEmitter();

//3.注册事件，异步
myEventEmitter.on('asyncEvent',function(msg){
    setImmediate(function(){
        console.log(msg);
    })
});

//4.触发事件
myEventEmitter.emit('asyncEvent',"将参数传递到事件中,执行方式为异步");

//先打印我还是先打印事件
console.log(1);

