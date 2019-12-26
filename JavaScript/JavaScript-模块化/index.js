//封装私有变量：构造函数的写法 不好的原因：将私有变量封装在构造函数中，违反了构造函数与实力对象分离的原则
// function StringBuilder() {
//     var buffer = [];
//     this.add = function (str) {
//         buffer.push(str);
//     };

//     this.toString = function () {
//         return buffer.join('');
//     }
// }

//方法二、不好，构造函数中的变量可以被外部改写，不安全。
function StringBuilder() {
    this._buffer = [];
}

StringBuilder.prototype = {
    constructor: StringBuilder,
    add: function (str) {
        this._buffer.push(str);
    },
    toString: function () {
        return this._buffer.join('');
    }
};

var str1 = new StringBuilder();
str1._buffer.push(111);//这里存在可以在外部修改内部变量的问题。
str1.add(1);
str1.add(2);
console.log(str1._buffer);

// 三、立即执行函数的写法(IIFE)，不暴露内部私有成员

var module1 = (function(){
    var _count = 0;
    var m1 = function (){
        console.log('This is m1');
    };

    var m2 = function (){
        console.log('This is m2');
    }

    return {
        m1:m1,
        m2:m2
    }
})();

console.log(module1._count);// undefined因为此时作用域在自执行函数内，外部拿不到该变量，属于私有变量

//四、模块的宽放大模式
// 立即执行函数的参数，可以是空对象

var module2 = (
    function(mod){
        return mod;
    }
)(global.module2 || {});// 如果module2为空对象，则也是支持的，这里global对象上挂在的module2 实际为undefined

console.log(module2);// 打印出 为{}，因为global.module2 为undefined


// 四，输入全局变量，显示的将其他变量输入模块

// var module3 = (function($,YAHOO){

// })(jQuery,YAHOO);


(function(g){

    var go = function(num){
        console.log('Go go go' + num);
    }

    var back = function(num){
        console.log('Back back back' + num);
    }

    g.finalCarousel = {
        go:go,
        back:back
    }

})(global);

// 将内部封装的函数，最终挂在到了传入的global全局变量上
global.finalCarousel.go(1);
global.finalCarousel.back(-1);






