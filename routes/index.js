var express = require('express');
var router = express.Router();
var passport = require('passport');
var request = require('request');
var usersCtrl = require('../controllers/users');


/* GET home page and render dogs from petfinder API */
router.get('/', function(req, res, next) {
  let options = {
    url: `http://api.petfinder.com/pet.getRandom?key=e4653e6431252bb0a55d474d2689f72b&animal=dog&output=basic&location=los%20angeles%20CA&format=json`,
  };
  request(options, function(err, response, body) {
      var petData = JSON.parse(body);
      res.render('index', { 
        title: 'pawfect',
        user: req.user,
        petData
      });
  });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'login'})
});


// router.get('/saved', function(req, res) {
//   console.log(req.user)
//   if (req.user) {
//     res.render('users/saved', {
//       title: 'Saved Dogs',
//       user: req.user
//     })
//   } else {
//     res.render('login', {
//       title: 'Log in to view saved pets!'
//     })
//   }
// });

// Google Authentication
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
