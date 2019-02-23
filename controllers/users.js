const Student = require('../models/student');

module.exports = {
    index,
    addDog
};

function index(req, res, next) {
  console.log(req.query)
  // ADD A SORT KEY... AKA A FILTER PARAM FOR THE PUPSS
  Shelters.find({})
  .exec(function(err, shelters) {
    if (err) return next(err);
    res.render('/index', {
      shelters,
      user: req.user,
    });
  });
}


function addDog(req, res, next) {
    req.user.savedDogs.push(req.body) 
    req.user.save(function(err) {
        res.redirect('/');
    })
}