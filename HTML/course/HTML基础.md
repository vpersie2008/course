# HTML 基础教程

-------------------------------
##一、HTML 课程介绍

###什么是HTML 

 - HTML 指的是超文本标记语言(Hyper Text Markup Language)
 - HTML 它不是一个变成语言，它是一种标记语言
 - 标记语言是一套标记标签，主要用于构建网页文档
 - HTML 使用标签构建网页 如```<div></div>```

###浏览器推荐

 - 谷歌Google(推荐)
 - 火狐(Firefox)
 - Safari
 - IE（最好不要用）

###编辑器推荐

 - Visual Studio code (推荐)

##二、上网的基本常识

###因特网（Internet）
 - 国际互联网
 >互相通信的计算机连接而成的“全球网络”
 - 每个电脑都有一个IP地址 192.168.0.1
 - 计算机之间的相互通讯使用的是TCP/IP 协议
 - HTTP 处理网络之间的数据请求和响应
 >HTTP 全程“HyperText Transfer Protocal(超文本传输协议)”

###Web服务器

 - 服务器是用于存储写好的网页或程序(Linux，Windows，Nginx)
 >网页本质上就是“一个一个的文件”，网站本质上就是网页文件的集合
 
 - 主机服务商是提供可用的服务器空间
 - 域名是一个便于识别的统一名字如，https://www.baidu.com
 - DNS 是将域名解析到服务器的公网IP上(Domain Name Service)

##三、HTML 是什么？

###Html 是什么？
- HTML 指的是超文本标记语言(Hyper Text Markup Language)
>HTML 它不是一门变成语言，是标记语言，通过标签渲染展示

- 标记语言的作用是制作网页结构或者文档
- HTML 是前端最重而且是最基础的部分，是一等公民
- HTML 部分会及其枯燥

###CSS 是什么？
- CSS 说白了就是网页变得更炫的样式，全称较层叠样式表(Cascading Style Sheets)
- CSS 就是针对HTML 标签设置样式
> 例如将下列h1标签设置成红色```<h1 style="color:red"></h1>```

###网站简单技术分工
- HTML = 内容展示/结构/渲染网站
- CSS = 样式/设计
- Javascript =让网页动起来，前端的灵魂
- .NET service，后端服务
- Database(SqlServer、MySQL，MongoDB<非关系型>)


###VS Code 介绍及使用
- VS code Live Server

>1.作用：该插件用于实时响应HTML代码，保存之后实时刷新页面

>2.安装及使用：左侧导航条，搜索live server，安装完跳转到当前页面，右键 Open with live server

>3.如何关掉：在网页代码中，右键Stop live server，即可关掉

###HTML 的标签

- 标签的代表标记是**<>**
- 通常写标签都是承兑出现的双标签
- 双标签 
>`<h1>Hello</h1>`

>`<p>欢迎来到我的课堂</p>`

- 单标签
> `<br>` 换行符，在HTML5中可以正常解析

> `<br />` 换行符，在HTML5&XHTML 中正常解析


- 代码范例 demo
>`<h1>欢迎来到我的课堂</h1>`

>`<p>欢迎来到我的课堂</p>`

- HTML DOCTYPE
> DOCTYPE 表示HTML代码的文档类型，`<!DOCTYPE html>` 即表示HTML5


##四、HTML常用的标签

###常用标签

- 标题标签 h1~h6 即`<h1></h1>`
- 段落标签 `<p></p>`
- 字体加粗标签`<strong></strong>`
- 斜体字标签`<em></em>`
- 删除线标签`<del></del>`
- 换行标签`<br>或<br />`
- 横线换行标签 `<hr>s`

### 链接和图片标签

- 链接标签 即 a标签

>链接到外部链接，href为外部网址
>`<a href="http://www.baidu.com">链接到外部网址</a>`

>链接到内部链接，href为内部文档地址
>`<a href="/test.html">链接到内部文档地址</a>`

>新起一页打开，`<a href="http://www.baidu.com">链接到外部网址</a>``

- 图片标签，即img标签
>显示本地图片：
>
>`<img src="/images/athletic.png" alt="如果图片未找到，则说明这段话"></img>`

>显示外部地址图片
>
>`<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558026131478&di=09854742d7bf19caeab821f76f5e84e9&imgtype=0&src=http%3A%2F%2F03.imgmini.eastday.com%2Fmobile%2F20180412%2F20180412000746_21ff1e60a555b4b8f5c45e7abac293e0_2.jpeg" alt="如果图片未找到，则说明这段话"></img>`
>
>img标签中可以使用width和height属性来控制图片大小，如
>
>`<img src="/images/athletic.png" alt="如果图片未找到，则说明这段话" width="200" height="300"></img>`


###列表和表格标签

li>*4

- 有序列表`<ol></ol>`

>使用列表快捷键 **`li*4`** 可以快速创建元素

    <!-- <ol type="1">
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
        <li>list4</li>
    </ol>-->
    <!-- 1 阿拉伯数字 ,A 大写排序 ,a 小写排序, I 大写罗马字排序, i 罗马数字排序-->
    <!-- type 类型-->
    <!-- 1 阿拉伯数字 ,A 大写排序 ,a 小写排序, I 大写罗马字排序, i 罗马数字排序-->

- 无序列表`<ul></ul>`

<!-- 无序列表 -->
    <ul>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
        <li>list4</li>
    </ul>      
	<!-- type 类型-->
    <!-- 1 阿拉伯数字 ,A 大写排序 ,a 小写排序, I 大写罗马字排序, i 罗马数字排序-->

- 无序列表`<table></table>`

<!----->
    <table style="width:600px">
        <thead>
            <th>
            <td>Header1</td>
            <td>Header2</td>
            <td>Header3</td>
            </th>
        </thead>
        <tbody>
            <tr>
                <td>Content1</td>
                <td>Content2</td>
                <td>Content3</td>
            </tr>
            <tr>
                <td>Content1</td>
                <td>Content2</td>
                <td>Content3</td>
            </tr>

        </tbody>
    </table>

###行标签和块标签

- 行标签特点

>1.行标签不会换行

>2.行标签宽度由内容决定

>3.常用的行标签如`<span>`,`<strong>`,`<a>`,

- 块标签特点

>1.块标签会占满整行

>2.块标签的宽度就是容器的宽度

>3.常用的块标签有`<p>`,`<div>`,`<h1>`

**注意: 不需要去记这些，只需通过F12打开调试器学会看即可**

>


###id属性和class属性


- id属性主要用于标示元素，一个HTML文档中某个元素的ID应该时唯一的
- class属性是用来描述元素的样式的，多个元素可以用同一个class值，即它不是唯一的


###from表单提交

- input的常用类型

>input的常见类型有
>
>text(文本输入框)
>
>password（密码输入框）
>
>date（日期输入框）
>
>radio（单选框）
>
>checkbox（复选框）
>
>number（输入字输入框）

- from表单提交

>from标签用于form内标签的数据提交到后台action属性对应地址，内容都是根据标签中的 name或value抓取的。

- textarea和下拉框

> textarea 为多行文本输入框，可根据`cols`(设置列数)`rows`(设置行数)

> select为下拉框，option用于设置下拉属性

