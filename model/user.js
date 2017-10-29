var mongoose=require("mongoose");

var userSchema= new mongoose.Schema({
	userName:String,
	userPassword:String,

});

var User=mongoose.model("User",userSchema);

module.exports=User;