const path = require('path');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/users', (req, res, next) => {
  const users = adminData.users;
  res.render('user', {
    prods: users,
    pageTitle: 'Users',
    hasUsers: users.length > 0,
  });
});

module.exports = router;
