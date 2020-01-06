const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
let app = express();


const persons = require('./person.json');

middleWare1 = (req, res, next) => {
    console.log('First middle ware.');
    next();
}

middleWare2 = (req, res, next) => {
    console.log('Second middle ware.');
    next();
}

middleWare3 = (req, res, next) => {
    console.log('Third middle ware.');
    next();
}

//为全局加上中间件，参数为一个参数数组
//app.use(middleWare1,middleWare2,middleWare3);
// app.use(middleWare2);
// app.use(middleWare3);

//app.get('/home',middleWare1,middleWare2,middleWare3);

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());

//可以访问public 下面所有的资源文件，如图片等
app.use('/public', express.static('public'));

app.get('/contact', (req, res) => {
    //console.log(req);
    //res.json(persons);
    res.send('<h1>Hello world</h1>');
});

//请求的数据写入文件中
app.post('/post', (req, res) => {
    fs.writeFile('post.json', JSON.stringify(req.body), function (err, data) {
        if (err) {
            throw err
        }

        console.log('Write post.json file done.');
        res.send({ done: true });
    });
});

//从写入的文件中获取数据
app.get('/postData', (req, res) => {
    fs.readFile('post.json', function (err, data) {
        if (err) {
            throw err
        }
        console.log('Read post.json file done.');
        res.send(JSON.parse(data));
    });
});


//静态页面方式访问
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});

//路由方式访问静态页面

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});

//中间件放到get方法下面，则优先返回了结果，不会再加载中间件
// app.use(middleWare1,middleWare2,middleWare3);

app.listen(3000, 'localhost', () => {
    console.log('server is running!');
});


