var monitor = require('../models/monitor'); 
 
// List of all monitor
exports.monitor_list = async function (req, res) {
    try {
        themonitor = await monitor.find();
        res.send(themonitor);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}; 
 
// VIEWS
// Handle a show all view
exports.monitor_view_all_Page = async function (req, res) {
    try {
        themonitor = await monitor.find();
        res.render('monitor', { title: 'monitor Search Results', results: themonitor });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
 
// for a specific monitor.
exports.monitor_detail = function (req, res) {
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