var express = require('express');

var router = express.Router();

var coffee = require('../models/coffee.js');

router.get('/profile', function(req, res){
  coffees.all(function(data){
    var hbsObject = {
      coffees: data
    };
    console.log(hbsObject);
    res.render('profile', hbsObject);
  });
});

module.exports = router;
