var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/getCustomer', function(req, res, next) {
    res.send('Getting the customer');
  });