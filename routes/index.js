var express = require('express');
var router = express.Router();
var passport = require('passport');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  let options = {
    url: `http://api.petfinder.com/pet.getRandom?key=e4653e6431252bb0a55d474d2689f72b&animal=dog&output=basic&location=90034&format=json`,
  };
  request(options, function(err, response, body) {
      var petData = JSON.parse(body);
      console.log(petData);
      res.render('index', { 
        title: 'pawfect',
        user: req.user,
        petData
      });
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login'})
});

router.get('/saved', function(req, res, next) {
  res.render('saved', {title: 'Saved Dogs'})
})

router.get('/auth/google', 
  passport.authenticate( 'google',
  { scope: ['email', 'profile'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google', // magic string -- needs to be perfect
  { 
    successRedirect: '/',
    failureRedirect: '/'
   } // config object
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})


module.exports = router;
