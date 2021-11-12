var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var monitor_controller = require('../controllers/monitor');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// monitor ROUTES ///
// POST request for creating a monitor.
router.post('/monitor', monitor_controller.monitor_create_post);
// DELETE request to delete monitor.
router.delete('/monitor/:id', monitor_controller.monitor_delete);
// PUT request to update monitor.
router.put('/monitor/:id', monitor_controller.monitor_update_put);
// GET request for one monitor. 
router.get('/monitor/:id', monitor_controller.monitor_detail);  
// GET request for list of all monitor items.
router.get('/monitor', monitor_controller.monitor_list);
module.exports = router;