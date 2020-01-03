##文件系统##

####一、什么是文件系统？####

文件系统主要对项目中的文件进行操作

1. 读取文件
2. 写入文件
3. 流程：引入fs模块-> 调用方法 -> 异常捕获


####二、读写取文件:####

- **同步读取文件**
>

    //引入文件系统模块
    var fs = require('fs');
    
    //同步读取文件
    var readMe = fs.readFileSync('read.txt','utf8');


- **同步读取后，同步写入**

>

    fs.writeFileSync('write.txt',readMe);



- **异步读取文件：**

>

    //引入文件系统模块
    var fs = require('fs');
    
    // 异步读取文件
    fs.readFile('read.txt', function (err, data) {
	    if (err) {
	    	throw err;
		}
    	console.log(data);
    });

- **异步读取异步写入**

>

	//异步读取文件后写入
    fs.readFile('read.txt', function (err, data) {
    if (err) {throw err;}
    
    fs.writeFile('write.txt',data, function(err){
	    if(err){throw err;}
	    console.log('写入文件成功');
    	});
    });


####三、创建文件及删除文件####

>文件系统对文件的操作主要包含：

1. **创建文件夹(fs.mkdir)**
2. **删除文件夹(fs.rmdir)**
3. **删除文件(fs.unlink)**
4. **流程：引入fs模块 -> 调用方法 -> 异常捕获**

---------


- **删除一个文件**(文件必须存在，否则会报错)

>

    fs.unlink('write.txt',function(err){
	    if (err){throw err;}
	    console.log('文件删除成功');
    })

- **创建一个文件夹，读取已存在的文件并写入文件夹中**

>


    fs.mkdir('stuff',function(){
    fs.readFile('read.txt','utf8',function(err,data){
	    if(err){throw err;}
		    fs.writeFile('./stuff/writeMe.txt',data,function(err){
			    if(err){throw err}
			    console.log('文件写入成功');
		    });
	    });
    });
    

- **异步删除文件夹,非空文件夹不允许之间删除，必须先删除文件，再删除文件夹**

>

    fs.rmdir('stuff',function(err){
    if(err){
    	throw err;
    }
    	console.log('文件夹删除成功')
    });
    

- **异步删除文件夹，先删除文件夹中的文件，再删除文件夹**


>

    fs.unlink('./stuff/writeMe.txt',function(err){
    if (err){throw err;}
	    fs.rmdir('stuff',function(err){
		    if(err){
		    	throw err;
	    	}
	    	console.log('文件夹删除成功')
	    });
    })