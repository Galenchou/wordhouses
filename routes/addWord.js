var express=require("express");
var router=express.Router();

var Type=require("../model/wordType");
router.get("/",function(req,res,next){

	Type.find({},function(err,doc){
		console.log(doc);
		if(err){
			console.log(err)
		}else{
			res.render("addWord",{title:"addWord",typeArray:doc});
		}
		
	})
	
})


module.exports=router;