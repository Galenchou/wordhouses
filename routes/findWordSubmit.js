var express=require('express');

var router=express.Router();

var Dictionary=require('../model/Dictionary');

var Type=require('../model/wordType');
router.post("/",function(req,res,next){

		var word=req.body.inputWord;
		var type=req.body.select;
		var wherestr={"wordName":word,"wordType":type};
		var Mean="";
		Dictionary.find(wherestr,function(err,doc){
			if(err){
				console.log("查询失败");
				res.render("find",{title:"Find"});
			}else{
				console.log("查询成功");
				
				

				Type.find({},function(err,doc1){
					if(err){
						console.log(err);
					}else{
						res.render('findword',{result:doc,typeArray:doc1});
						}
					})
				
		}
	 });
		
		
		
});

module.exports=router;