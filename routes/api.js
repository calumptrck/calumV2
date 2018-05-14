import express from 'express';
import dayController from './../controllers/dayController';

let router = express.Router();
let Day = require('./../models/Day');

router.get('/tasks', function(req, res, next) {
  Day.find({}).sort({_id: -1}).exec(function(err, days){
    if (err) {
      console.log(err);
    } else {
      res.json(days);
    }
  });
});

router.get('/*', function(req, res, next) {
    res.json({error: "Not found"})
  });

module.exports = router;
