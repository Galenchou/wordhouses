var express=require("express");

var router=express.Router();

var Type=require("../model/wordType");





router.post('/',function(req,res,next){

	var wordtype=req.body.Type;
	type=new Type({
		wordType:wordtype
	})
	type.save(function(err){
		console.log(err);
	})

	res.redirect('addType');
})

module.exports=router;