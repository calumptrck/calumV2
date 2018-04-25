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
      res.render('index', { 
        title: 'Calum Patrick',
        days: days,
      });
    }
  });
  
});

router.get('/add/:id1/:id2', function(req, res, next) {
  console.log(Day);
  var sum = parseInt(req.params.id1) + parseInt(req.params.id2);
  res.status(200).json({
    sum: sum
  })
  
});

router.post('/newpost', dayController.post);

module.exports = router;
