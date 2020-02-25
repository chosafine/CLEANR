'use_strict';

// Requiring environment variables
require('dotenv').config();
// Requiring necessary npm packages
const express = require('express');
const session = require('express-session');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require('./models');

// Creating express app and configuring middleware needed for authentication
const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

require('./routes/htmlRoutes.js')(app);
require('./routes/apiRoutes.js')(app);

db.sequelize.sync({ force: false, logging: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
