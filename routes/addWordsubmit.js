var express=require('express');

var router=express.Router();

var Dictionary=require('../model/Dictionary');
router.post("/",function(req,res,next){
		var wordName=req.body.wordName;
		var wordMean=req.body.wordMean;
		var wordType=req.body.select;
		console.log(wordType);
		dictionary=new Dictionary({
			wordName:wordName,
			wordType:wordType,
			wordMean:wordMean
		})
		dictionary.save(function(err){
				console.log(err);
		})
		res.redirect("addWord");
});
module.exports=router;