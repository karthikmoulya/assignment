const path = require('path');

const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add User',
  });
});

router.post('/', (req, res, next) => {
  users.push({ user: req.body.user });
  res.redirect('/user/users');
});

exports.routes = router;
exports.users = users;
