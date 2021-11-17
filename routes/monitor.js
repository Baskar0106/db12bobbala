var express = require('express');
const monitor_controlers= require('../controllers/monitor');
var router = express.Router();

/* GET monitor */ 
router.get('/', monitor_controlers.monitor_view_all_Page );

/* GET detail monitor page */ 
router.get('/detail', monitor_controlers.monitor_view_one_Page); 

/* GET create monitor page */ 
router.get('/create', monitor_controlers.monitor_create_Page); 

/* GET create update page */ 
router.get('/update', monitor_controlers.monitor_update_Page); 

/* GET create monitor page */ 
router.get('/delete', monitor_controlers.monitor_delete_Page); 


module.exports = router;