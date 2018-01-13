var express = require('express');
var router = express.Router();



import dayController from './../controllers/dayController';
let Day = require('./../models/Day');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(Day);
  
  Day.find({}).sort({date: -1}).limit(3).exec(function(err, days){
    if (err) {
      console.log(err);
    } else {
      res.render('index', { 
        title: 'Calum Patrick',
        days: days,
      });
    }
  });
  
});

router.post('/newpost', dayController.post);

module.exports = router;
