const mongoose = require("mongoose") 
const monitorSchema = mongoose.Schema({ 
 brand:{
    type: String,
    minLength: 2
}, 
 size: {
    type: String,
    minLength: 7
}, 
 cost: Number 
}) 
 
module.exports = mongoose.model("monitor", 
monitorSchema)