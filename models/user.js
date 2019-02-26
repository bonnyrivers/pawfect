var mongoose = require('mongoose');
var Schema = mongoose.Schema;


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
    savedDogs: [{type: Schema.Types.ObjectId, ref: 'Dog'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);