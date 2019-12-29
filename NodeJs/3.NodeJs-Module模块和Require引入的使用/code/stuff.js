// 一、有一个方法 var counter = function (arr) {     return "一共有" + arr.length +
// '个元素在数组中'; } module.exports = counter; 如果有多个方法该如何导出？

var counterOne = function (arr) {
    console.log('第1个计算方法')
    return "一共有" + arr.length + '个元素在数组中';
}

var counterTwo = function (arr) {
    console.log('第2个计算方法')
    return "一共有" + arr.length + '个元素在数组中';
}

//如下结果如何？ module.exports = counterOne; module.exports = counterTwo; 正确导出
module.exports.counterOne = counterOne;
module.exports.counterTwo = counterTwo;

//更简单方式导出,使用对象

// module.exports = {
//     counter1: counterOne,
//     counter2: counterTwo
// }
