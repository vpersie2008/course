##Node。Js事件模块

#### 一、什么是事件模块？ ####

1. 大多数Node.js API 都是采用管用的异步事件架构(`fs/http`)，例如读写文件。
2. 所有能触发事件的对象都是 **EventEmiter** 的实例, 这些对象上有一个**eventEmitter.on()**的方法，用于绑定一个或多个事件。
3. 事件流程：引入事件模块events -> 创建 EventEmitter 对象 -> 注册事件 -> 触发事件。



#### 二、事件应用 ####

- **注册并使用事件**

**例如：**一个简单的EventEmiter实例，绑定一个监听器，使用eventEmitter.on() 注册监听器，使用eventEmitter.emit()来触发事件。



    //1.引入事件模块
	const EventEmitter = require('events');
    
	//2.继承实现自己的事件类
    class MyEmitter extends EventEmitter {}
    
	//3.注册事件
    const myEmitter = new MyEmitter();
    myEmitter.on('event', () => {
      console.log('触发事件');
    });
	
	//4.触发事件
    myEmitter.emit('event');


- **异步VS同步**

使用 `EventEmitter` 以注册的顺序同步的调用所有监听器，这样可以保证事件的正确排序。可以使用`setImmediate()` 方法切换到异步模式下。

注册事件部分可改为:

    myEmitter.on('event', (a, b) => {
      setImmediate(() => {
		console.log('异步地发生');
      });
    });


- **事件注册一次或多次**

使用eventEmiter.on() 注册的事件可以多次触发，使用eventEmiter.once 注册的事件只会触发一次。

**例如1：** 使用eventEmiter.on() 然后在使用eventEmiter.emit() 调用时，事件会被触发多次。

    const myEmitter = new MyEmitter();
    let m = 0;
    myEmitter.on('event', () => {
      console.log(++m);
    });
    myEmitter.emit('event');
    // 打印: 1
    myEmitter.emit('event');
    // 打印: 2

**例如2：** 使用eventEmiter.once() 注册的事件，在触发时只触发一次

    const myEmitter = new MyEmitter();
    let m = 0;
    myEmitter.once('event', () => {
      console.log(++m);
    });
    myEmitter.emit('event');
    // 打印: 1
    myEmitter.emit('event');
    // 不触发


- **移除事件（单个事件）**

使用 `removeListener` 来移除指定的事件，当emit() 触发之前，是不会移除事件的。

    const myEmitter = new MyEmitter();
    
    const callbackA = () => {
      console.log('A');
      myEmitter.removeListener('event', callbackB);
    };
    
    const callbackB = () => {
      console.log('B');
    };
    
    myEmitter.on('event', callbackA);
    
    myEmitter.on('event', callbackB);
    
	// 当emit 触发后，才会移除事件B，所以此处打印A,B
    myEmitter.emit('event');
	// 事件B 已被移除，次数打印 A
    myEmitter.emit('event');


- **移除事件（多个事件）**

使用 `removeAllListeners` 来移除多个事件。
