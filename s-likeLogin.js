// 中间件函数机制
var express = require('express');
var app = express();

// 中间件，中间的函数。
// 执行了likeLogin，若有res返回，则不执行后面的函数
function likeLogin(req, res, next) {
    console.log("模拟登陆成功");
    res.json({
        error: 0,
        data: [1, 2, 3]
    });
};

app.use('/api', likeLogin, (req, res, next) => {
    console.log("/api  app.post");
    next();
});

app.listen(3002, function () {
    console.log('端口3000正在运行');
})

