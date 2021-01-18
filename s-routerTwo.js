//单一文件的应用程序，而不是使用Express generator所得到的应用骨架
const express = require('express')
const app = express()
const port = 8081

// app.get('/', (req, res) => res.send('Hello World!'))

//以下示例定义了简单的路线
//在首页上回应
app.get('/',function(req,res){
    res.send('Hello World!');
})

//在根路由（/）（应用程序的主页）上响应post请求
app.post('/',function (req,res) {
    res.send('got a post request')
})

//响应对/user路由的PUT请求
app.put('/user',function (req,res) {
    res.send('got a put request at /user')
})

//响应对/user路由的DELETE请求：
app.delete('/user',function (req,res) {
    res.send('got a delete request at /user')
})

//处理404响应
app.use(function (req,res,next) {
    res.status(404).send('sorry,cannot find that')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))