const address = "Zero One square";
const city = "Xian";
const province = "ShaanXi";
const country = "China";


document.body.innerHTML = address + "City : " + city + "Province : " + province + "Country : " + country;


//模板字符串ES6 新增
// 使用`` 号，变量用${}

document.body.innerHTML = `${address} City : ${city} Province : ${province} Country : ${country}`;
