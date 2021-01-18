var express = require('express');
var path = require('path');
var app = express();

// 告诉express 视图存在于名叫views的文件夹中
app.set('views', path.resolve(__dirname, 'views'));

//告诉express 使用ejs模版引擎
app.set('view engine', 'ejs');

app.get('/goEjs', (req, res) => {
    res.render('index', {
        message: 'hello .'
    })
});

app.listen('3000', () => {
    console.log('开始运行 3000');
})