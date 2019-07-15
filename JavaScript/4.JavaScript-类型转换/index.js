/** JavaScript 类型转换 */

let val;

/**一、将数值转换成字符串 */
// 1. 使用 String()

//Number to String
val = String(5);
val = String(5+5);

//Bool to String
val = String(true);

//Date to String
val = String(new Date());

//Array to String
val = String([1,2,3,4]);

// 2. 使用 toString()
// 使用toString将 数值转换成字符串
val = (555).toString();
// 使用toString 将bool 转换成string
val = true.toString();


console.log(val);
console.log(typeof val);
console.log(val.length);

/**二、将Number 转换成 String */

// 1. 使用Number() 对象来转换 
let num;
//String to Number 
num = Number('5');

//Bool to Number 
num = Number(true);// true 为 1 ，false 为 0 

//Null to Number 
num = Number(null);// 默认转换为0

// NaN ，即Not a Number 
num = Number('hello');// 它是一个字符串，转换不了 number，即会返回 NaN
mum = Number([1,2,3]);// 它是一个数组，也转换不了 number，即会返回 NaN

// 2. 使用parseInt(),parseFloat() 来转换

//parseInt() 将 字符串 类型值转换成 整形 数值。
num = parseInt('123.11');

//parseFloat() 将字符串类型值转换成浮点类型数值
num = parseFloat('123.22');

//打印
console.log(num);
console.log(typeof num);
console.log(num.toFixed(2));// 保留几位小数

/**三、数值的相加 */

//1. 数值类型的相加
const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log(sum);

//2. 字符串类型和数值类型相加

const str1 = '3';
const num1 = 4;
console.log(str1 + num1);// 这里结果会为字符串类型的 34，因为+ 号前面是字符串类型，+ 号具有转换类型的作用。


