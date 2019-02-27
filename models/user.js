var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dogSchema = new Schema({
    name: String,
    age: {
        type: Number,
    },
    sex: {
        type: String,
    },
    datePosted: {
        type: Date
    },
    id: {
        type: Number
    }
});

var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true 
    },
    savedDogs: [dogSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);