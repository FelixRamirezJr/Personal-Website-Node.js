var express = require('express');
var router = express.Router();

/* GET me page. */
router.get('/', function(req, res, next) {
  res.render('me');
});

module.exports = router;
