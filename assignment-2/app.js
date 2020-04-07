const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('In the Middleware');
//   next();
// });

// app.use((req, res, next) => {
//     console.log('In another middleware');
//     res.send('<h1>Hello</h1>');
//   });

app.use('/user', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from user</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In the Middleware');
  res.send('<h1>Hello from Node.js</h1>');
});

app.listen(5000);
