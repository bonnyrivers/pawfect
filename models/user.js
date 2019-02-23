var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    savedDogs: [{type: Schema.Types.ObjectId, ref: 'Dog'}]
})

module.exports = mongoose.model('User', userSchema);