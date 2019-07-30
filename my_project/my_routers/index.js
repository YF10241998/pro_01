const express=require('express');
//引入连接池模块
const pool=require('../my_pool.js');

//创建路由器对象
var router=express.Router();

router.get("/",(req,res)=>{
  var sql=`SELECT * FROM myimg`;
  pool.query(sql,[],(err,result)=>{
	if(err){
	  console.log(err);
	  res.send({code:0});
	}else{
	  res.send(result);
	}
  })
})

//登录
router.post("/login",(req,res)=>{
  //接收验证数据
	var $uname = req.body.uname;
	var $upwd = req.body.upwd;
  if(!$uname){
	res.send("用户名不存在");
	return;
  }
  if(!$upwd){
	res.send("密码不存在");
	return;
	}
	//查询数据库
	var sql = "select * from user where uname=? and upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
	if(err) throw err;
	if(result.length>0){
		res.send({code:1,msg:"登录成功"});
	}else{
		res.send({code:-1,msg:"用户名或密码错误"});
	}
  });
});

//注册
router.post("/reg",(req,res)=>{
	var $uname = req.body.uname;
	var $email = req.body.email;
	var $upwd = req.body.upwd;
	var $phone = req.body.phone;
	var $user_name = req.body.user_name;
	if (!$uname){
		res.send({code:401,msg:'uname required'});
		return;
	}
	if (!$email){
		res.send({code:402,msg:'email required'});
		return;
	}
	if (!$upwd){
		res.send({code:403,msg:'upwd required'});
		return;
	}
	if (!$phone){
		res.send({code:404,msg:'phone required'});
		return;
	}
	if (!$user_name){
		res.send({code:405,msg:'user_name required'});
		return;
	}
	pool.query("insert into user set uname=?,upwd=?,email=?,phone=?,user_name=?",
	[$uname,$upwd,$email,$phone,$user_name],(err,result)=>{
	if (err) throw err;
	if (result.affectedRows>0){
		res.send({code:'200',msg:'reg suc'});
	}else{
		if (!$uname || !$upwd || !$email || !$phone || !$user_name){
			res.send({code:'404',msg:'reg los'});
			}
		}
	});
})








//导出路由器对象
module.exports=router;