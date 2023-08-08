var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getUser', function(req, res, next) {
  res.send('Getting the user');
});

router.get('/createUser', function(req, res, next) {
  res.send('Creating the user');
});

module.exports = router;
