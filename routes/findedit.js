var express=require('express');

var router=express.Router();
var Dictionary=require("../model/Dictionary.js");

router.post('/',function(req,res,next){

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

router.get('/',function(req,res,next){

	 var word=req.query.wordlistfind;
	 console.log(word)
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

router.post('/editsubmit',function(req,res,next){
	
	 var wordname=req.body.wordName;
	 var oldData={'wordName':wordname}
	 var wordtype=req.body.wordType;
	 var wordmean=req.body.wordMean;
	 console.log(wordtype+'=='+wordmean);
	 var newData={'wordType':wordtype,'wordMean':wordmean};
	 Dictionary.update(oldData,newData,function(err,doc){
	 		if(err){
	 			console.log(err);
	 		}else{
	 			console.log("跳转成功")
	 			res.redirect('/wordList');
	 		}
	 })
})



module.exports=router;