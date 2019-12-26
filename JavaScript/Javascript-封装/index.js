function Cat(name,color){
    this.name = name;
    this.color = color;
}
//构造函数都哟一个prototype的属性
//该属性对象挂在的所有属性和方法，都会被生成的实体类继承
Cat.prototype.type = "猫科动物"
Cat.prototype.eat = function (){console.log('吃老鼠')};

var cat1 = new Cat('cat1','yellow hair');
var cat2 = new Cat('cat2','white hair');

cat1.eat();
cat2.eat();

//实例对象上的__proto__，即指向原型对象Cat上的prototype，
// 这两个对象，指向同一个内存地址，所以是相等的
console.log(cat1.__proto__ == Cat.prototype);// 实例对象上的__proto__指向 Cat原型对象上的prototype

//实例上会含有一个constructor属性，指向他的构造函数
console.log('cat1 constructor is equal to Cat');
console.log(cat1.constructor == Cat);//构造函数constructor指向原型对象


// 通过isPrototypeOf() 方法，用来判断某个prototype个实例之间的关系。
console.log(Cat.prototype.isPrototypeOf(cat1));
//hasOwnProperty()，用于判断实例对象上的 属性到底是本地属性，还是来自prototype上的属性
//返回true，表示该属性为本地属性，返回false则为prototype上的属性
console.log(cat1.hasOwnProperty('type'));// false
console.log(cat1.hasOwnProperty('name'));//true

//in运算符
//1.用于判断某个实例是否含有某个属性，不论是本地属性还是prototype上的属性。
console.log('name' in cat1);// true表示该属性就是 该对象的本地属性
console.log('type' in cat1);//无论是否是prototype上的属性，只要该对象包含该属性，则返回true
//2.in运算符还可以遍历某个对象的所有属性
for(var prop in cat1){
    console.log("cat1["+prop+"]="+cat1[prop]);
}








