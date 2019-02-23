var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'pawfect' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login'})
});

router.get('/saved', function(req, res, next) {
  res.render('saved', {title: 'Saved Dogs'})
})

router.get('/auth/google', passport.authenticate(
  'google', // magic string -- needs to be perfect
  { scope: ['profile', 'email']} // config object
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',  //login works
    failureRedirect: '/login'          //fail, back to login
  }
));

module.exports = router;
