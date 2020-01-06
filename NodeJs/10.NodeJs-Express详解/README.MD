# NodeJs - Express #

#### 一、 Express 简介 ####

**Express 是一个简介而灵活的 node.js Web 应用框架，提供了一系列强大特性帮你创建各种Web应用，丰富的http工具。**

Express 框架核心特性：

- 可以设置中间件来响应请求。(body-parser第三方中间件)
- 定义了路由表用于执行不同的http 请求动作
- 可以通过向模板传递参数来动态渲染HTML页面


#### 二、 安装Express ####

- 安装express并保存到依赖列表中 (`npm install express --save`)
- 安装body-parser用于解析 application/json 或 application/x-www-form-urlencoded格式请求 
	(`npm install body-parser --save`)


### 三、 Express 应用 ####

1. 创建一个express 服务并监听到3000端口，请求该地址返回 "Hello world"

    	const express = require('express');
    	let app = express();

		//请求http://localhost:3000，将内容输出到页面上
    	app.get('/',(req,res)=>{
    		res.send('Hello world');
    	});

		//设置服务监听端口为3000,地址为localhost
    	app.listen(3000,'localhost',()=>{
    		console.log('server is running!');
    	});


2. express 的路由：定义路由请使用 get或post等方法第一个参数定义，如：
		
		//1> 定义路由为http://localhost:3000/home
    	app.get('/home',(req,res)=>{
    		res.send('Hello world');
    	});

		//2> 定义带路由参数的路由
    	app.get('/home/:id',(req,res)=>{
    		res.send('Hello world');
    	});

		//如何获取路由参数
		req.params 对象中获取

		
3. express 之RESTful API

	**1)** 使用express 做RESTful API ，一般会和**body-parser** 这个中间件(**middleware**)绑定使用，需要安装它。


		//使用app.use(...middleware) 使用中间件body-parser 从而解析 application/json
	    const express = require('express');
	    const bodyParser = require('body-parser');
	    let app = express();
	
		//parse application/x-www-form-urlencoded
		app.use(bodyParser.urlencoded({extended:false}));
		//parse application/json
		app.use(bodyParser.json());
	    
		//定义路由为/contact 的接口，返回{"name":"jerry"} 这个response
	    app.get('/contact',(req,res)=>{
	    	res.json(JSON.stringify({name:"jerry"}));
	    });

	**注意事项：** 中间件 body-parser使用app.use时，必须在app.get 之前，否则无法使用。


	**2)** 使用post 写入文件，使用get从文件中获取json 数据


		//请求的数据写入文件中,文件名post.json
		app.post('/post', (req, res) => {
		    fs.writeFile('post.json', JSON.stringify(req.body), function (err, data) {
		        if (err) {
		            throw err;
		        }
		
		        console.log('Write post.json file done.');
		        res.send({ done: true });
		    });
		});
	
		//从写入的文件中获取数据
		app.get('/postData', (req, res) => {
			fs.readFile('post.json', function (err, data) {
				if (err) {
				    throw err;
				}

				console.log('Read post.json file done.');
				res.send(JSON.parse(data));
			});
		});

	

### 三、 详解express之middleWare 中间件 应用 ####

- 什么是中间件（middleWare）

> 中间件是提供系统软件和应用软件之间连接的软件，以便于软件各部件之间的沟通，特别是应用软件对于系统软件的集中的逻辑，在现代信息技术应用框架如Web服务、面向服务的体系结构等中应用比较广泛。



-  Node.js 的express中间件:
   
**中间件分为：**

- 内置中间件（express.static）
- 第三方中间件（body-parser）
- 自定义中间件（自定义函数），如路由级别中间件，错误处理中间件

> **express中间件其本质就是一个函数**，在收到请求和返回响应之间，可以做一些处理：如图（中间件原理）
> express 中对中间件解释是：执行任何代码。修改请求和响应对象，终结请求-响应循环，调用下一个中间件。

		const express = require('express');
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
		
		//全局使用middleware
		app.use(middleWare1);
		app.use(middleWare2);
		app.use(middleWare3);
		
		app.get('/middleware',middleWare3, (req, res) => {
		    res.send('<h1>Hello world</h1>');
		});
		
		
		app.listen(3001, 'localhost', () => {
		    console.log('server is running!');
		});

**总结：**
	
>	**1) middleware 就是一个函数，用于处理express中的请求-响应数据**

>	**2) middleware 在使用use时，必须在get或post前使用，否则不生效。**

>	**3) middleware 是依次执行的，通过next() 方法向下传递**


- 使用express.static('directory') 可以将资源文件托管到服务器中（内置中间件）

	    //可以访问public 下面所有的资源文件，如图片等
    	
    	app.use('/public', express.static('public'));
    