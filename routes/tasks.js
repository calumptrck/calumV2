var express = require('express');
var router = express.Router();

import dayController from './../controllers/dayController';
let Day = require('./../models/Day');

router.get('/', function(req, res, next) {
  Day.find({}).sort({_id: -1}).exec(function(err, days){
    if (err) {
      console.log(err);
    } else {
      res.render('tasks', { 
        title: 'Calum Patrick',
        days: days,
      });
    }
  });
});

module.exports = router;
