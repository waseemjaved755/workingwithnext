var express = require('express');
var router = express.Router ();

router.get('/getMyRoute', function(req, res, next) {
    res.send('Getting myRoute');
  });
  router.post('/postMyRoute', function(req, res, next) {
    res.send('Posting myRoute');
  });
  router.put('/putMyRoute', function(req, res, next) {
    res.send('Updating myRoute');
  });
  router.delete('/deleteMyRoute', function(req, res, next) {
    res.send('Deleting myRoute');
  });

  module.exports = router;