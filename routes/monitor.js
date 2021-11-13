var express = require('express');
const monitor_controlers= require('../controllers/monitor');
var router = express.Router();

/* GET monitor */ 
router.get('/', monitor_controlers.monitor_view_all_Page );

/* GET detail monitor page */ 
router.get('/detail', monitor_controlers.monitor_view_one_Page); 



module.exports = router;