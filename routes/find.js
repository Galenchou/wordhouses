var express=require("express");
var router=express.Router();



var Type=require("../model/wordType");
router.get("/",function(req,res,next){

	Type.find({},function(err,doc){
		
		if(err){
			console.log(err)
		}else{
			res.render("find",{title:"Find",typeArray:doc});
			
		}
		
	})
	

});





module.exports=router;