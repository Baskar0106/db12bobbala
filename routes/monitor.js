var express = require('express');
const monitor_controlers= require('../controllers/monitor');
var router = express.Router();

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
} 


/* GET monitor */ 
router.get('/', monitor_controlers.monitor_view_all_Page );

/* GET detail monitor page */ 
router.get('/detail', monitor_controlers.monitor_view_one_Page); 

/* GET create monitor page */ 
router.get('/create', secured, monitor_controlers.monitor_create_Page); 

/* GET create update page */ 
router.get('/update', secured, monitor_controlers.monitor_update_Page); 

/* GET create monitor page */ 
router.get('/delete', secured, monitor_controlers.monitor_delete_Page); 


module.exports = router;