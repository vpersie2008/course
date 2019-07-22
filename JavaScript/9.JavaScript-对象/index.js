const person = {
    firstName:"Jerry",
    lastName:"Wang",
    age:30,
    email:"jw6g@newegg.com",
    hobbies:["Football","History","Coding"],
    address:{
        city:"Xi'an",
        state:"ShaanXi"
    },
    getBirthYear:function () {
        return 1990;
    }

}

let val = person;

//获取单个属性
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.address['city'];
val = person.getBirthYear();


console.log(val);
