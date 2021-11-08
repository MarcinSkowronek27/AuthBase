const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  if(!req.user) {
    res.redirect('/user/no-permission');
  } else res.render('logged');
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