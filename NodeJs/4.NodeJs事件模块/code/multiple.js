//使用addListener 添加多个事件 addListener  是 emitter.on(eventName,listener) 的别名

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

//第一个监听事件
myEmitter.on('event', function firstListener() {
    console.log('第一个监听器，无参数')
});

// 第二个监听器
myEmitter.on('event', function secondListener(arg1, arg2) {
    console.log('第二个监听器有两个入参' + arg1 + ' ' + arg2);
});

//第三个监听器

myEmitter.on('event', function thirdListener(...args) {
    const parameters = args.join(', ');
    console.log(`第三个监听器中的事件有参数 ${parameters}`);
});

//打印下有多少个event事件
console.log(myEmitter.listeners('event'));

// 触发所有events事件，按事件注册的顺序触发
//myEmitter.emit('event','1','2','3','4','5');

myEmitter.emit('event','1','2','3','4','5');