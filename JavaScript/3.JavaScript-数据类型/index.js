/**数据类型分类 ************************************************************************/

// 1.基本数据类型
// String(字符串)、Number(数值)、Boolean(布尔)、Null(空)、undefined(未定义)、 Symbol(符号，基本用不到)

// 2.引用数据类型
// Object (对象)、Array(数组)、Date (日期)


/**一、基本数据类型 */
//string
const name = "Jerry wang";

//number 
const age =80;

//boolean
const isMale = true;

//null
const car = null;

//undefined,定义了但未赋值就是undefined
let test;

//symbol
const symbol = Symbol();


/**二、引用数据类型 */

//1. 对象,使用对象字面量方式定义，简单方式
const person = {
    name:"jerry",
    age:30
}

// 使用new 关键字去定义对象
const addr = new Object();
addr.city = "xian";

// 2. 数组,数组中可以是任何类型的数据
const hobbies = ["football",30,true,'music'];

// 使用new 关键字，定义Array

const arry = new Array();

// 3. 日期对象
const today = new Date();


/**三、使用typeof 关键字查看类型 */

console.log(typeof today);











