const User = require('../models/user');
const request = require('request');

module.exports = {
    index,
    saveDog,
    showSaved,
    delete: deleteDog,
    updateDescription,
    showProfile
};

function showProfile(req, res) {
  User.findOne({'_id': req.params.id}).exec(function(err, user) {
    var name = user.name;
    res.render('users/profile', {
      title: `Welcome ${name}`,
      user,
    });
  });
}

function updateDescription(req, res) {
  User.findByIdAndUpdate(req.params.id, {'description': req.body}, function(err, user) {
    if (err) res.render('users/profile/req.params.id');
  })
}

function index(req, res, next) {
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

function deleteDog(req, res) {
  req.user.savedDogs.id(req.params.id).remove();
  req.user.save(function (err) {
    res.redirect('/saved');
  })
}
