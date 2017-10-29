var express=require("express");

var router=express.Router();

var Dictionary=require("../model/Dictionary.js");
router.get("/",function(req,res,next){

	Dictionary.find({},function(err,doc){
		if(err){

		}else{
			console.log(doc);
			res.render("wordList",{result:doc});

		}
		
	})

	 
})

router.get('/deleword',function(req,res,next){
		var id=req.query.id;
		var deleid={_id:id};
		Dictionary.remove(deleid,function(err,doc){
				if(err){
					console.log(err)
				}else{
					res.redirect("/wordList");
				}
		})
})

// 列表页面查询
router.post('/findedit',function(req,res,next){

	 var word=req.body.wordlistfind;
	 var wordfind={wordName:word};
	 Dictionary.find(wordfind,function(err,doc){
	 	 if(err){
	 	 	console.log("查询不到");
	 	 	res.redirect("/wordList");
	 	 }else{
	 	 	console.log(doc);
	 	 	res.render("wordlistfind",{title:"wordlistfind",wordResult:doc});
	 	 }
	 })
})

module.exports=router;