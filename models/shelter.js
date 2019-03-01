var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var shelterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    // dogs: [dogSchema],
})



module.exports = mongoose.model('shelter', shelterSchema);