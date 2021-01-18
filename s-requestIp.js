//demo: 实现IP黑名单功能
var express = require('express');
var app = express();

//express设置代理 https://www.expressjs.com.cn/guide/behind-proxies.html
//本机的IP地址 192.xxx.xxx.xxx
/**
 * ：：1说明你的电脑开启了ipv6支持,这是ipv6下的本地回环地址的表示。
因为你访问的时候用的是localhost访问的，是正常情况。
使用ip地址访问或者关闭ipv6支持都可以不显示这个。
 */
var EVIL_IP = '::1';

// var EVIL_IP = 'xxxx';

app.use(function (request, response, next) {
    if (request.ip === EVIL_IP) {
        console.log('reject request.ip', request.ip);
        response.status(401).send('not allowed');
    } else {
        console.log('pass request.ip', request.ip)
        next();
    }
});

//304 对客户端有缓存情况下服务端的一种响应 简单的表达就是：服务端已经执行了GET，但文件未变化。
app.get('/go', (req, res) => {
    res.send('test page');
});

app.listen(3003, () => {
    console.log('端口3003');
});