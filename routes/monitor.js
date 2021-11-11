var express = require('express');
const monitor_controlers= require('../controllers/monitor');
var router = express.Router();

/* GET monitor */ 
router.get('/', monitor_controlers.monitor_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('monitor', { title: 'Search Results monitor' });
});

module.exports = router;