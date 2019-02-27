const User = require('../models/user');
const request = require('request');

module.exports = {
    index,
    saveDog,
    showSaved
};

function index(req, res, next) {
  // ADD A SORT KEY... AKA A FILTER PARAM FOR THE PUPSS
  Shelters.find({})
  .exec(function(err, shelters) {
    if (err) return next(err);
    res.render('/', {
      shelters,
      user: req.user
    });
  });
}

function saveDog(req, res) {
  if (req.user) {
    req.user.savedDogs.push({
      id: req.params.id,
      name: req.body.name,
      photo: req.body.photo,
      sex: req.body.sex,
      age: req.body.age
    });
    req.user.save();
  }
  let options = {
    url: `http://api.petfinder.com/pet.getRandom?key=e4653e6431252bb0a55d474d2689f72b&animal=dog&output=basic&location=los%20angeles%20CA&format=json`,
  };
  request(options, function(err, response, body) {
      let petfinderData = JSON.parse(body);
      res.render('index', { 
        title: 'pawfect',
        user: req.user,
        petData: petfinderData.petfinder.pet
      });
  });
}

function showSaved(req, res) {
  if (req.user) {
    res.render('users/saved', {
      title: 'Saved Dogs',
      user: req.user,
      savedDogs: req.user.savedDogs
    })
  }
}
                  //   req.user.savedDogs.forEach(function(dogId) {
                  //     let options = {
                  //       url: `http://api.petfinder.com/pet.get?key=e4653e6431252bb0a55d474d2689f72b&id=${dogId}&format=json`,
                  //     };
                  //     request(options, function(err, response, body) {
                  //         let petData = JSON.parse(body);
                  //         userSavedDogs.push(petData);
                  //         console.log(userSavedDogs)
                  //     });
                  //   });
                  // }