/**
 * created by ben dunn, oct 3 2016
 *
 * basic generated router class for node created through express.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
