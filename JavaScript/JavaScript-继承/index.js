//声明一个动物对象的构造函数
function Animal(){
    this.species = 'Thi is an Animal';
}

//声明一个“猫”对象的构造函数，猫是可以继承自动物的
function Cat(name,color){
    this.name = name;
    this.color = color;
}

//怎样才能让猫，继承动物呢？
//一、构造函数的绑定，使用call或apply
// function Cat(name,color){
//     Animal.apply(this,arguments);
//     this.name = name;
//     this.color = color;
// }

// var cat1 = new Cat('大猫','黄色');
// console.log(cat1.species);

//二、prototype模式
Cat.prototype = new Animal();//让prototype属性指向父级Animal对象，此时prototype属性即被重写到父级
Cat.prototype.constructor = Cat;// 必须将子的Cat(即constructor)重新指回，否则Cat的构造函数将指向父级

var cat2 = new Cat('二毛','黑色');
console.log('Cat继承自Animal :: ' + cat2.species);


//三、直接继承prototype
function Animal(){}
Animal.prototype.species = '动物';

//将Cat的prototype属性，指向Animal的prototype属性，这样就完成了继承，Cat对象中拥有父类的方法和属性
Cat.prototype == Animal.prototype;
//需要回指向Cat，因为在prototype重定向到Animal之后，其构造函数其实是指向父类的
Cat.prototype.constructor = Cat;
//优点：效率高，省内存，因为它没有重新再New对象
//缺点：Animal的prototype和Cat的prototype指向了同一个对象，这样其实父级的构造函数Animal.prototype.constructor也就被重写了，
//这样做其实是有问题的

//四、迂回方案，利用空对象作为中介
var FTemp = function(){}//定义一个空的临时的构造函数
FTemp.prototype = Animal.prototype;//将父级的prototype绑定到临时函数的prototype上
Cat.prototype = new FTemp();//new 对象，继承temp函数中的内容
Cat.prototype.constructor = Cat;// 重新绑定Cat的constructor

//为了方便，我们整一个函数用于继承
function extend(Child,Parent){
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;//备用，将prototype绑定到一个变量上去
}

// extend(Cat,Animal);

// var cat4 = new Cat("大毛","黄色");
// console.log(cat4.species);

//五，拷贝继承
//思路：将父对象的所有属性和方法，全部拷贝到子对象中。

function extend2(Child,Parent){
    var p = Parent.prototype;
    var c = Child.prototype;
    for(var i in p){
        c[i] = p[i];
    }
    c.uber = p;
}

// extend2(Cat, Animal);
// var cat5 = new Cat("二毛","蓝色");
// console.log(cat5.species);





