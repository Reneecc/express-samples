//静态文件中间件 
var express = require("express");
var path = require("path");
var http = require("http");
var app = express();

//使用 path.resolve 之所以不直接使用 /public 
//是因为 Mac 和 Linux 中目录为 /public 而 Windows 使用万恶的反斜杠 \public 。path.resolve 就是用来解决多平台目录路径问题。
var publicPath = path.resolve(__dirname, "public"); 

app.use(express.static(publicPath)); 

app.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Looks like you didn't find a static file.");
});
http.createServer(app).listen(3000);
