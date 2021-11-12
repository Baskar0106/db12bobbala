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
 


// Handle monitor create on POST. 
exports.monitor_create_post = async function (req, res) {
    console.log(req.body)
    let document = new monitor();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"monitor_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand; 
    document.size = req.body.size; 
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}; 
 
// Handle monitor delete form on DELETE. 
exports.monitor_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: monitor delete DELETE ' + req.params.id); 
}; 
 
// Handle monitor update form on PUT. 
exports.monitor_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await monitor.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.monitor)  
               toUpdate.brand = req.body.brand; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// for a specific monitor. 
exports.monitor_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await monitor.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 