const mongoose = require("mongoose") 
const monitorSchema = mongoose.Schema({ 
 brand: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("monitor", 
monitorSchema)