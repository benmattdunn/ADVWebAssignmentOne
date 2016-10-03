var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 4',
   });
});


/* get random page */
router.get('/random', function(req, res, next){
  var randomNum = Math.random();

  // render the random number
  res.render('random', {title: 'random number getter',
    randomNumber: randomNum});
});

module.exports = router;
