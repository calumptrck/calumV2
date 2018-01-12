var express = require('express');
var router = express.Router();

import dayController from './../controllers/dayController';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Calum Patrick' });
});

router.post('/newpost', dayController.post);

module.exports = router;
