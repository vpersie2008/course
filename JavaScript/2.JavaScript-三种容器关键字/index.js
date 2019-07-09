/**一、定义变量的三种方式,三种变量容器关键字 */

// 1. var  (定义变量)
// 2. let  (定义变量)
// 3. const (定义常量)

/**二、变量的使用方法 */

// 1. 定义变量
var name = "变量所存储的值";
console.log(name);

// 2. 修改name里的值，即修改变量的值
name = "Jerry wang";
console.log(name);

// 3. 初始化 var，如果不给变量赋值，则认为变量为undefined
var greeting;
console.log(greeting);

// 4.给变量赋值之后，变量里存储的就是新的值
greeting = "Hello ";
console.log(greeting);

/**三、变量的命名规范 */

// 1.变量名要求：字母，数字，_，下划线，$
// 2.注意变量不能以数字开头
// 3.书写变量的范例
var firstName = "Jerry"; //使用小驼峰命名，多数情况看下使用
var first_name = "Jerry";//使用中间下划线命名，JS一般不推荐
var FirstName = "Jerry"; //使用大驼峰命名，一般用于类等特殊情况
var firstname = "Jerry";// 全小写命名，一般不推荐

/**四，let，const声明变量 */

// 1. let 用于定义变量，可以被改变。
let name1 = 'Jerry wang';
console.log(name1);
name1 = "Jerry wang2";
console.log(name1);

// 2. const 用于定义常量，所谓常量，即不可被改变。
const name2 = 'Jerry wang const';
console.log(name2);
// name2 = "尝试改变name2值，会报错";

// 3. const 定义对象需要注意，对象不能被重新赋值，但是对象中里面的属性可以
const person = {
    name:"Jerry",
    age:30
}

console.log(person);

//尝试改变person中的值，是可以的，例如
person.name = "Person 1";
console.log(person.name);

// 尝试改变整个对象，即对整个对象进行赋值，是不行的
// person = {test:"test"}; 

// 切记，定义常量一定要赋初始值



