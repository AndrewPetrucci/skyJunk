var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { 
  		title: 'SkyCastProto',
  		author: 'Andrew Joseph Petrucci',
  		dateCreated: '6/15/2016', 
  		apiKeyGoogle: 'AIzaSyAeQpO4uRwdYSN7vp8oRkQRbZ-eqZZVpbM',
  		apiKeyForecast: '653e14dac37602712f60c4b102043de2',
  		maxStoriedQueries: 8
	});
});

module.exports = router;
