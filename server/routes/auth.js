const express = require('express');
const passport = require('passport');

const router = express.Router();

// environment-variables
const CLIENT_URL = process.env.CLIENT_URL;

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: `${CLIENT_URL}/login` }),
  (req, res) => {
    res.redirect(CLIENT_URL);
  }
);

router.get('/logout', function (req, res, next) {
  res.redirect(`${CLIENT_URL}/login`);
});

module.exports = router;
