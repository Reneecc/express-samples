//引入express模块
var express = require('express');

//使用 express() 方法创建变量 app ，该方法会返回一个请求处理函数闭包
var app = express();

app.use(function (req, res) {
    res.send('hello world');
    //res.end 终止止执行下面的语句，使 Web 服务器停止处理脚本并返回当前结果
    // res.end('HELLO WORLD');
});

app.listen(3000, function () {
    console.log('运行 3000')
});

