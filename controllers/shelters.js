var Shelter = require('../models/shelter');
var request = require('request');

module.exports = {
    // want to be able to index shelters
    index
}

function index(req, res, next) {
    let user = req.user;
    let options = {
        url: `http://api.petfinder.com/shelter.find?key=e4653e6431252bb0a55d474d2689f72b&location=90034&format=json`,
    }
    request(options, function(err, response, body) {
        var shelterData = JSON.parse(body);
        var sheltersArray = shelterData.petfinder.shelters.shelter;
        console.log(sheltersArray)
        res.render(`shelters/index`, {
            title: 'Shelters near you',
            sheltersArray,
            user: req.user
        })
    });
}