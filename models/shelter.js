var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dogSchema = new Schema({
    name: String,
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date
    }
});

var shelterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    dogs: [dogSchema],
})



module.exports = mongoose.model('shelter', shelterSchema);