var Shelter = require('../models/shelter');

module.exports = {
    // want to be able to index shelters
    index
}

function index(req, res, next) {
    res.render('/shelters', {
        shelters
    });
}