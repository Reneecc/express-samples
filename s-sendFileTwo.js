//发送本地文件
var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

//使用resolve解决多平台目录路径问题（因为window是\public，而Mac和Linux 为/public）
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

//获取本地twoTest.txt文件内容
app.get('/gotwoTest', function (req, res) {
    console.log('发送twoTes.txt文件');
    // res.sendFile(__dirname,'/twoTest.txt');
    res.sendFile('twoTest.txt',{ root: __dirname });
    //这样获取图片 报错path must be absolute or specify root to res.sendFile
    // res.sendFile('public/images/bg.jpg');
    // res.sendFile(path.join(__dirname, '/', 'twoTest.txt'));
});

//发送本地ejs文件
app.get('/sendEjs',function(req,res){
    //express 3.0以后 path都被分离出来了
    res.sendFile(path.join(__dirname, '/views', 'index.ejs'));//这里把sendEjs文件 下载下来了 打开文件就是index.ejs内的代码内容
});

http.createServer(app).listen(3002,function(){
    console.log(`Example router listening on port 3002!`);
});