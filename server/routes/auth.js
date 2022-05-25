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
  passport.authenticate('google', {
    failureRedirect: `${CLIENT_URL}/login`,
    successRedirect: CLIENT_URL,
  })
);

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  }
});

router.get('/logout', (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }
    res.redirect(`${CLIENT_URL}/login`);
  });
});

module.exports = router;
