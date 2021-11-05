var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('monitor', { title: 'Search Results monitor' });
});

module.exports = router;