//静态文件中间件 
var express = require("express");
var path = require("path");
var http = require("http");
var app = express();

//使用 path.resolve 之所以不直接使用 /public 
//是因为 Mac 和 Linux 中目录为 /public 而 Windows 使用万恶的反斜杠 \public 。path.resolve 就是用来解决多平台目录路径问题。
var publicPath = path.resolve(__dirname, "public"); 

app.use(express.static(publicPath)); 

//发送本地txt文件测试
//报错  path must be absolute or specify root to res.sendFile 路径必须是绝对路径或指定根路径res.sendFile文件
app.get('/sendTxt',function(req,res){
    console.log('发送文件测试');
    // res.sendFile("public/images/bg.jpg");
    res.sendFile('test.txt',{ root: __dirname });
    // res.end('发送文件成功');//这一步不会执行，（但是txt中的文字内容显示会乱码） 也不会存在两次res发送服务器的报错
});

//发送本地ejs文件
app.get('/sendEjs',function(req,res){
    // res.sendFile(__dirname + '/index.ejs');//404 找不到请求的资源
    // res.sendFile(__dirname,'/views/index.ejs');//直接略过  去到了looks like ......
    //express 3.0以后 path都被分离出来了
    res.sendFile(path.join(__dirname, '/views', 'index.ejs'));//这里把sendEjs文件 下载下来了 打开文件就是index.ejs内的代码内容

});

app.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Looks like you didn't find a static file.");
});
http.createServer(app).listen(3000,function(){
    console.log(`Example router listening on port 3000!`);
});
