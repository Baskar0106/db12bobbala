var monitor = require('../models/monitor'); 
 
// List of all monitors 
exports.monitor_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: monitor list'); 
}; 
 
// for a specific monitor. 
exports.monitor_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: monitor detail: ' + req.params.id); 
}; 
 
// Handle monitor create on POST. 
exports.monitor_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: monitor create POST'); 
}; 
 
// Handle monitor delete form on DELETE. 
exports.monitor_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: monitor delete DELETE ' + req.params.id); 
}; 
 
// Handle monitor update form on PUT. 
exports.monitor_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: monitor update PUT' + req.params.id); 
}; 