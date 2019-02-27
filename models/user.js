var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dogSchema = new Schema({
    name: String,
    age: {
        type: String
    },
    sex: {
        type: String
    },
    photo: {
        type: String
    },
    id: {
        type: String
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