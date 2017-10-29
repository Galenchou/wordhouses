var mongoose=require("mongoose");

var typeSchema=new mongoose.Schema({
	wordType:String
});

var type=mongoose.model("type",typeSchema);

module.exports=type