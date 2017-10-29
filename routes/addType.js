var express=require("express");
var router=express.Router();


var Type=require("../model/wordType");


router.get("/",function(req,res,next){
	
	Type.find({},function(err,doc){
		if(err){
			console.log(err);
		}else{
			console.log(doc);
			res.render("addType",{title:"addType",typeArray:doc});	

		}
	})
	
})



router.post('/addTypesubmit',function(req,res,next){

	var wordtype=req.body.Type;
	type=new Type({
		wordType:wordtype
	})
	type.save(function(err){
		console.log(err);
	})

	res.redirect('/addType');
})

router.post('/deleteType',function(req,res,next){
	var deletetype=req.body.delete;
	var dele={wordType:deletetype};
	Type.remove(dele,function(err,doc){
		if(err){
				console.log(err);
		}else{
			res.redirect('/addType');
		}
	})

})

module.exports=router;