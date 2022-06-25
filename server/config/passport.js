const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const User = require('../models/user.js');

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOne({ googleId: profile.id }, (error, user) => {
        if (error) throw error;
        if (user) {
          return cb(null, user);
        } else {
          const newUser = new User({
            googleId: profile.id,
            email: profile.emails[0].value,
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            avatar: profile.photos[0].value,
          });
          newUser.save((err) => {
            if (err) throw err;
            return cb(null, newUser);
          });
        }
      });
    }
  )
);

passport.serializeUser((user, cb) => {
  return cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id).then((user) => {
    return cb(null, user);
  });
});
