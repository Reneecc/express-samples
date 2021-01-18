var express = require('express');
var path = require('path');
var http = require('http');
const port = 3001;

var app = express();

//当请求根目录的时候被调用
app.get('/',function(request,response){
	response.send('welcome to homepage');
});

//当请求/about的时候被调用
app.get('/about',(request,response) => {
	//重定向 匹配到/hello/world 可以在network里看到302 临时性重定向，表示资源临时被分配了新的 URL
	response.redirect("/hello/world");
	// response.send('welcome to about page' );
});

//当请求weather页面时候被调用
app.get('/weather',(req,res) => {
	res.send('welcome to weather page');
});

//除了固定路由外 还可以匹配复杂路由
//指定‘hello’为路由的固定部分
app.get('/hello/:who',function(request,response){
	//:who 不是固定住，表示URL中传递过来的名字
	response.end('hello,' + request.params.who + '.');
	response.end(request.params.who); 
});

//匹配正则
//对页面abcd,abxcd,ab123cd,等响应get请求
app.get('/ab*cd', function (req, res) {
    console.log('/ab*cd GET请求');
    res.send('正则匹配');
});

//当前面路径都不匹配时，则路由错误，返回404页面
//eg:localhost:3000/hello/entire/earth
　app.use(function(request,response){
	response.statusCode = 404;
	response.end('404');
});

app.listen(port, () => console.log(`Example router listening on port ${port}!`))













