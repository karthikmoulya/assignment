const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const userRoutes = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminData.routes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
  res.status(404).render('pnf', { pageTitle: 'Page Not Found!' });
});

app.listen(5000);
