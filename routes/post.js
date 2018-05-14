import express from 'express';
import dayController from './../controllers/dayController';
import Day from './../models/Day';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(Day);
  
  Day.find({}).sort({_id: -1}).limit(4).exec(function(err, days){
    if (err) {
      console.log(err);
    } else {
      res.render('post', { 
        title: 'Calum Patrick',
        days: days,
      });
    }
  });
  
});

module.exports = router;
