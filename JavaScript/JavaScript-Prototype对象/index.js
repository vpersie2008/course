//一、Prototype对象 对象原型链的终点是Object.prototype，它的类型是null
console.log(Object.getPrototypeOf(Object.prototype));

var MyArray = function () {};
MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;

var mine = new MyArray();
mine.push(1, 2, 3);

//他的原型对象的类型是数组[]，返回数组[]
console.log(Object.getPrototypeOf(MyArray.prototype));
//它的实例对象的类型是数组[],返回true
console.log(mine instanceof Array);

/**
 * 1.所有对象都有一个原型对象prototype，这个对象用于继承，这个原型对象上的所有属性和方法，都会被实例对象共享。
 * 2.如果某个属性在实例对象上找不到，则会在prototype上找，再找不到则向上查找上一级的prototype，终点是Object.prototype
 * 其原型为null 即Object.getPrototypeOf(Object.prototype) === null
 * 3.原型链的查找顺序为，实例对象->原型对象(prototype)->上级原型对象->...终点Object.prototype
 *
 */

//二、constructor属性 prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数，即
function P() {}
//返回true，因为原型对象的构造函数就指向构造函数本身
P.prototype.constructor === P

//2.constructor既然在prototype上，意味着他会被所有实例对象继承

function P2() {};
var p2 = new P2();
p2.constructor === P;
p2.constructor === P2.prototype.constructor;
p2.hasOwnProperty('constructor'); // false，它不是一个本地属性，是挂在在原型对象上的属性

//3.有了constructor属性，则可以从一个实例对象新建另一个实例

function Constr() {};
var x = new Constr();
var y = new x.constructor();
console.log(y instanceof Constr); // y是 Constr的实例对象,但x和y 是两个独立的实例对象
console.log(y === x); //false，都是Constr的实例对象，但实际上不相等
console.log(y.__proto__ == x.__proto__); //true 因为他们都是Constr 的实例对象，古原型对象相等

//调用自身构造函数,可以新建一个实例
Constr.prototype.createCopy = function () {
    return new this.constructor();
};
//新建一个实例，这个实例都是Constr的实例
var z = Constr
    .prototype
    .createCopy();
console.log(z instanceof Constr); // true, z也是新建的一个实例，属于Constr的实例

//2.constructor属性表示原型对象与构造函数对象之间的关系，修改了原型对象，一般会同时修改constructor属性

function Person(name) {
    this.name = name;
}

console.log(Person.prototype.constructor == Person); //true，此时构造函数对象指向Person

//修改了prototype对象之后，因为prototype上有自己的constructor，修改了之后等于重新new了对象
Person.prototype = {
    method: function () {
        console.log('Person上的 constructor对象随即被修改了');
    }
}

//此时
console.log(Person.prototype.constructor === Person); //false，因为此时prototype被修改
console.log(Person.prototype.constructor === Object); //true

//如下三种写法依次更优化，第一种写法不好，因为重新new了一个对象，破坏了原有C 上的constructor
function C() {}

C.prototype = {
    method1: function () {}
}

//更好，这种会将新对象的constructor重新指向C，这样新对象的constructor 就不会改变老的constructor
C.prototype = {
    constructor: C,
    method1: function () {}
}

//最好，之间挂载在C的prototype上，则不需要重新new对象，也就不存在构造函数被重定向问题
C.prototype.method1 = function () {};

//三、instanceof运算符：作用：返回一个bool值用于表示对象是否为某个构造函数的实例 1.判断对象是否是某个构造函数的实例对象
function Vehicle() {};
var v = new Vehicle();
console.log(v instanceof Vehicle); // true
//等同于
Vehicle
    .prototype
    .isPrototypeOf(v); //true,表示v是否是Vehiche的实例对象，true表示是，等价于instanceof
// instanceof 关键字检查的是整个原型链，所以同一个实例对象，可能会对多个构造函数返回true
var d = new Date();
console.log(d instanceof Date); // true
console.log(d instanceof Object); // true 原型链的终点是object

//2.用于判断对象类型（只能判断对象的类型）

var x = [1, 2, 3];
var y = {};
x instanceof Array; //true
y instanceof Object; //true

//3 只能用于判断对象类型，如下对string类型不起作用，string不是一个对象

var s = 'hello';
console.log(s instanceof String); //false，string的数据它不是一个对象，是原始类型的值

//undefined 和null不是任何对象的实例，即用instanceof则都返回false
console.log(undefined instanceof Object);
console.log(null instanceof Object);

//4.利用instanceof 关键字，巧妙判断忘记加new的情况

function Fubar(foo, bar) {
    //判断实例对象是否是Fubar的实例对象，如果是则返回true，否则去new对象
    if (this instanceof Fubar) {
        this._foo = foo;
        this._bar = bar;
        console.log(this._foo);
    } else {
        return new Fubar(foo, bar);
    }
}
//这里可以不加new，
var tst = Fubar(1,2);
