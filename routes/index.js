var express = require('express');
var router = express.Router();

import dayController from './../controllers/dayController';
let Day = require('./../models/Day');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(Day);
  
  Day.find({}).sort({_id: -1}).limit(4).exec(function(err, days){
    if (err) {
      console.log(err);
    } else {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
  });
  
});

router.post('/newpost', dayController.post);

module.exports = router;
