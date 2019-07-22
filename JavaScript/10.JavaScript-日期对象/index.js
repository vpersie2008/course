
let val;
// 日期初始化
const today = new Date();
let birthday = new Date('1989-01-01 11:20:20');
birthday = new Date('September 10 1999');
birthday = new Date('9/10/19999');

val = birthday;
val = birthday.getMonth();
val = birthday.getDay();
val = birthday.getFullYear();
val = birthday.getHours();
val = birthday.getMinutes();
val = birthday.getSeconds();
val = birthday.getMilliseconds();
val = birthday.getTime();

//日期设置

birthday.setMonth(2);
birthday.setDate(9);
birthday.setFullYear(1998);
birthday.setHours(2);
birthday.setMinutes(20);
birthday.setMilliseconds(25);

console.log(birthday);






