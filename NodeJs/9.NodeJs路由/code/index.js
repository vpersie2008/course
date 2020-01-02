var fs = require('fs');
var http = require('http');
var server = http.createServer(function (req, res) {
    if (req.url !== '/favicon.icon') {
        if (req.url === '/home' || req.url === '/') {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(__dirname + '/api/home.html').pipe(res);
        }
        else if (req.url === '/api/contact') {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(__dirname + '/api/contact.html').pipe(res);
        } else if (req.url === '/api/docs') {
            var data = [{ name: "jerry", age: 30 }, { name: 'jeremy', age: 31 }];
            res.writeHead(200, { 'content-type': 'application/json' });
            res.end(JSON.stringify(data));
        }
    }
});

server.listen(3000,'localhost');
console.log('Server is running!');