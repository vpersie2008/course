//数组方法
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2 = new Array(11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
const fruit = ["Apple", "Pear", "Banana", "Orange"];
const mixed = [10, "Hello", undefined, null, true, { a: "a", b: "b" }, new Date()];


let val;

//获取数组长度
val = numbers.length;

// 检查是不是一个数组
val = Array.isArray(numbers);

// 获取数组中的单个元素
val = numbers[2];

// 给数组中的元素赋值
numbers[3] = 100;

// 查找元素下标位置
val = numbers.indexOf(5);

//向数组中添加某个元素(在末尾处追加)
numbers.push(250);

//向数组中添加某个元素(在第一个之前添加)
numbers.unshift(100);

// 从最后面删除数组元素
numbers.pop();

// 从前面删除
numbers.shift();

// 从指定位置删除数组(从第1个位置开始删，删除4个元素)
numbers.splice(1,4);

//反转数组
numbers.reverse();

// 数组排序
numbers.sort();


console.log(numbers);
console.log(val);




//按照里面的ASCII 码的顺序来排序
fruit.sort();
console.log(fruit);

//按照正序排列，使用函数的形式
numbers2.sort(function(x,y){
    return x-y;
});

console.log(numbers2);// 打印正序排列结果

//按照倒叙排列，使用函数形式
numbers2.sort(function(x,y){
    return y-x;
});

console.log(numbers2);// 打印倒叙排列结果



