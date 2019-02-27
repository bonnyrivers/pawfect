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
    },
    id:{
        type:Number
    }
});

module.exports = mongoose.model('Dog', dogSchema);