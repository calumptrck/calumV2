var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('post',{
      title: 'New Day'
  });
});

module.exports = router;
