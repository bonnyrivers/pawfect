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
        var petfinderData = JSON.parse(body);
        var petData = petfinderData.petfinder.pet;
        res.render(`/`, {
            petData
        })
    });
}

function show(req, res) {
    let user = req.user;
    let petfinderId = req.params.id;
    let options = {
        url: `${rootURL}pet.get?key=e4653e6431252bb0a55d474d2689f72b&id=${petfinderId}&format=json`
    }
    request(options, function(err, response, body) {
        let petfinderData = JSON.parse(body);
        let dogData = petfinderData.petfinder.pet;
        console.log(petfinderData)
        let doggyName = petfinderData.petfinder.pet.name.$t;
        res.render(`show`, {
            title: doggyName,
            petfinderId,
            user,
            dogData
        });
    });
}

