var express=require("express");
var router=express.Router();

var User=require('../model/user');

router.get('/',function(req,res,next){
	console.log("登陆界面跳转")
	res.render("login",{title:"登陆"});
})

router.post('/register',function(req,res,next){

	var userName=req.body.userName;
	var password=req.body.password;
	console.log("注册成功");
	user=new User({
		userName:userName,
		userPassword:password
	})

	user.save(function(err){
		console.log(err);
	})

	res.render("login",{title:"登陆"});


})

router.post('/login',function(req,res,next){

	var userName=req.body.userName;
	var password=req.body.password;

	var whereStr={'userName':userName,'userPassword':'password'};

	User.find(whereStr,function(err,doc){
		if(err){
			console.log("登陆失败")
			res.render("login",{title:"登陆"});
		}else{
			res.redirect('/find');
		}
	})



})

module.exports=router;
