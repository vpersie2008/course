const firstName = "Jerry";
const lastName = "Wang";

let val;
// 字符串拼接
val = firstName + lastName;

// 字符串加空格拼接
val = firstName + ' ' + lastName;

//字符串追加,等价于 val = val+ "China";
val += "China";
val = firstName.concat(' ** ',lastName);

// 双引号，单引号转义
val = 'This\'s is my class'
val = "This is my json \"Test\" ";

// 字符串长度
let firstNameLength = firstName.length;

// 字符串大小写转换
val = firstName.toUpperCase();//转大写
val = firstName.toLowerCase();//转小写

// 通过下标取指定下标下的字符
val = firstName[0];//取第0 个字符

// indexOf 查找字符串索引
val = firstName.indexOf("e");
val = firstName.lastIndexOf("y");

// chartAt 获取第几个字符
val = firstName.charAt('2');

// 获取最后一个字符
val = firstName.charAt(firstName.length -1 );

// 获取子字符串
val = firstName.substring(0,3);// 获取第0 个到第3 个字符

// 通过slice获取字符
val = firstName.slice(0,3); // 正着从第0个开始取3个字符
val = firstName.slice(-3);//倒着取3个字符

// split 转换数组

const greeting = "Hello world jerry wang";
val = greeting.split(' ');// 以空格分隔，转换成数组

// 打印
console.log(val);

