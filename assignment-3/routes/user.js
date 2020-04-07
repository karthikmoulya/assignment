const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/user-data', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'user.html'));
});

router.post('/user-data', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
