const express = require('express');
const bodyParser = require('body-parser');
let app = express();


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

app.use(middleWare1);
app.use(middleWare2);
app.use(middleWare3);

app.get('/middleware',middleWare3, (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.use(middleWare3);

app.listen(3001, 'localhost', () => {
    console.log('server is running!');
});

