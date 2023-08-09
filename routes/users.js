var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getUser', function(req, res, next) {

  const gettingQuery = req.query();
  res.send(gettingQuery);
});

router.post('/createUser', function(req, res, next) {
  res.send('Creating the user');
});
router.put('/updateUser', function(req, res, next) {
  res.send('Updatinh the user');
});
router.delete('/deleteUser', function(req, res, next) {
  res.send('deleting the user');
});

module.exports = router;
