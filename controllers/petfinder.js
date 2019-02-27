var request = require('request');
var rootURL = 'http://api.petfinder.com/';

module.exports = {
    petDetails,
    show
}

function petDetails(req, res) {
    let options = {
        url: `http://api.petfinder.com/pet.getRandom?key=e4653e6431252bb0a55d474d2689f72b&animal=dog&output=basic&location=90034&format=json`,
    }
    request(options, function(err, response, body) {
        var petData = JSON.parse(body);
    });
}

function show(req, res) {
    let user = req.user;
    let petId = req.params.id;
    let options = {
        url: `${rootURL}pet.get?key=e4653e6431252bb0a55d474d2689f72b&id=${petId}&format=json`
    }
    request(options, function(err, response, body) {
        var dogData = JSON.parse(body);
    });
    res.render('show', {
        title: petId,
        petId,
        user,
        dogData
    });
}

