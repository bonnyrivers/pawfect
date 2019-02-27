const User = require('../models/user');

module.exports = {
    index,
    saveDog
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

function saveDog(req, res, next) {
  // console.log(req.petData)
  req.user.savedDogs.push("this is a doooggg")
  console.log(req.user);
  // req.user.savedDogs.push(req.petData)
  res.redirect('/', {
    user: req.user,
    // title: `Saved ${req.petData.petfinder.pet.name}`
  });
}