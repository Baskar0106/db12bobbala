var express = require('express');
const monitor_controlers= require('../controllers/monitor');
var router = express.Router();

/* GET monitor */ 
router.get('/', monitor_controlers.monitor_view_all_Page );



module.exports = router;