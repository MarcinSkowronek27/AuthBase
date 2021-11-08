const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  console.log(req.user);
  if(!req.user) {
    res.redirect('/user/no-permission');
  } else res.render('logged', { name: req.user.displayName, image: req.user.photos[0].value});
});

router.get('/profile', (req, res) => {
  if (!req.user) {
    res.redirect('/user/no-permission');
  } else res.render('profile');
});

router.get('/profile/settings', (req, res) => {
  if (!req.user) {
    res.redirect('/user/no-permission');
  } else res.render('settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;