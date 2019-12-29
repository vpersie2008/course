var counter = require('./stuff');

//单个方法导出
//console.log(counter([1,2,3,4,5]));

//多个方法导出，到底用哪个？
//console.log(counter([1,2,3,4,5,6]));


//多个方法导出，具体哪个
//此时你应该按如下形式导出，这样导出，它拥有整个文件导出的所有属性
var stuff = require('./stuff');

console.log(stuff.counterOne([1,2,3,4]));
console.log(stuff.counterTwo([1,2,3,4]));

