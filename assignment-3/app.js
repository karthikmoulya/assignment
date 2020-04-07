const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const userRoute = require('./routes/user');
const dataRoute = require('./routes/data');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoute);
app.use(dataRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'pnf.html'));
});

app.listen(5000);
