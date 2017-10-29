var express = require('express');
var router = express.Router();

var Dictionary=require('../model/Dictionary')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test',function(req,res,next){
	var dictionary=new Dictionary({
		wordName:"林瑶",
		wordMean:"她在深圳上班"
	});

	dictionary.save(function(err){
			if(err){
				res.end("error");
				return next();
			}
			
	});

})
module.exports = router;
