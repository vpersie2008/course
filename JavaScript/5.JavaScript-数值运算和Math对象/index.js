const num1 = 100;
const num2 = 50;

let val;

// 数值运算

val = num1 + num2;// 加 
val = num1 - num2;// 减
val = num1 * num2;// 乘
val = num1 / num2;// 除
val = num1 % num2;// 取余

// Math 对象

val = Math.PI;
val = Math.round(2.6);//四舍五入
val = Math.ceil(2.2);// 向上取整
val = Math.floor(2.8);//向下取整
val = Math.sqrt(64);//开方
val = Math.abs(-3);// 取绝对值
val = Math.min(1,2,3,4,5,6,7,8,9);//取数值中的最小值
val = Math.max(1,2,3,4,5,6,7,8,9);//取数值之中的最大值
val = Math.random();//取0~1 之间的随机数


console.log(val);
