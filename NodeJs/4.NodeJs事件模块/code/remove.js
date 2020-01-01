// 如何移除事件？ 使用myEmitter.off() 可以移除指定的事件，它是 它是myEmitter.removeListener() 的别名,
// removeListener 只会一次移除一个事件，如果要移除所有，请使用removeAllListeners

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const callbackA = function() {
    console.log('A');
    myEmitter.removeListener('event', callbackB);
};

const callbackB = function () {
    console.log('B');
};

myEmitter.on('event', callbackA);
myEmitter.on('event', callbackB);

myEmitter.emit('event');

//emit()在触发之后，才会将callBackB 移除，单在callBackA 中移除B，而未触发事件是不会移除事件的。
// 只会打印处A,因为B 在事件触发后被移除了
myEmitter.emit('event');



// 用于移除所有事件
//myEmitter.removeAllListeners('event');

// 查看myEmitter 上的事件
//console.log(myEmitter.listeners('event'));