const express=require('express');
//引入body-parse
const bodyParser=require('body-parser');
//引入路由器
const projectRouter=require('./my_routers/index');

const cors=require("cors");

//创建web服务器
var app=express();
var server=app.listen(3000);

app.use(cors({
	origin:"http://127.0.0.1:5500"
}))

//托管静态资源到my_public
app.use( express.static('my_public') );

//使用body-parser中间件,将post请求的数据格式化为对象
app.use( bodyParser.urlencoded({
	extended:false
}) );

//使用路由器
//使用(挂载)的url:/project
app.use('/project',projectRouter);