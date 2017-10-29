var mongoose=require('mongoose');
	

var DictionarySchema=new mongoose.Schema({
	wordName:String,
	wordType:String,
	wordMean:String

});

var Dictionary=mongoose.model('Dictionary',DictionarySchema);

module.exports=Dictionary