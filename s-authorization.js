var express = require("express");
var http = require("http");
var app = express();

app.use(function(request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

app.use(function(request, response, next) {
  var minute = (new Date()).getMinutes();
  // 如果在这个小时的偶数分钟访问，那么调用next()继续
  if ((minute % 2) === 0) {
    next();
  } else {
    // 如果没有通过验证，发送一个403的状态码并进行响应  403，forbidden没有权限访问此网站
    response.statusCode = 403;
    response.end("Not authorized.");
  }
});

//如果密码这一行代码在前面 ，那么就不会执行下面的函数
app.use(function(request, response) {
  response.end('Secret info: the password is "swordfish"!'); // 发送密码信息
});


//http.createServer()该方法通过其回调函数来处理每一次的网络请求，并且进行响应。
http.createServer(app).listen(3000,function(){
    console.log('运行 3000');
});
