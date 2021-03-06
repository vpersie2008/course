#CSS 基础教程

##一、CSS 三种书写方式
- 行内样式

>写到标签内部的样式，使用style属性标记

<!---->
	<h1 style="color:red">行内样式</h1>

- 内联样式

> 写到style标签内的样式，使用CSS选择器定位修改指定标签的样式
<!---->

	<h2>内联样式</h2>

	<style>
	    h2 {
	        color: green;
	    }
	</style>

- 外联样式

>写在外部CSS文件中的样式，使用 link标签匹配链接到的CSS文件

<!---->
	如下：通过link标签，指定连接到css/style.css文件中
	<link rel="stylesheet" href="css/style.css">

- 选择器的优先级
> 行内样式 > 内联样式 > 外联样式 (**就近原则**)



##二、CSS 选择器

- 标签选择器

>使用**#样式名{样式内容}** 形式

<!---->

	h1{
		color:red;
	}


- 类选择器

> 使用 **.样式名{样式内容}**形式，`.` 代表类选择器样式

<!---->

	.header{
		color:red;
	}


- ID选择器

> 使用 **#样式名{样式内容}**形式，`#` 代表类选择器样式

<!---->

	#header{
		color:red;
	}


- 多选择器,**将样式名使用`，`分隔开**

<!---->

	如下样式使用逗号分隔，代表将两个ID的字体都设置成红色
	#header，#about{
		color:red;
	}

- 嵌套选择器

<!---->
	嵌套选择器，有层级关系，下面为将#header下面的p标签字体颜色设置成红色
	#header p{
		color:red;
	}


##三、CSS 字体样式
##四、CSS颜色的三种体现方式
##五、CSS背景和边框的使用
##六、CSS盒子模型