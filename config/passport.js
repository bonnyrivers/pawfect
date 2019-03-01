var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../models/user');

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
        // a user has logged in with OAuth,
        // Profile is user's google profile objectttttt
        // Finda  user with the googleId provided
        User.findOne({ 'googleId': profile.id }, function(err, user) {
            if (err) return cb(err);
            if (user) {
                return cb(err, user);
            } else {
                // new user
                var newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id,
                    description: ''
                });
                newUser.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newUser);
                });
            }
        });
    }
));

// vv----- called in order to set up the session.
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
// vv----- called everytime a request comes in 
// from an existing logged in user. It is this method 
// where we return what we want passport to assign to the req.user object.
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    })
});