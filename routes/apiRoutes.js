'use_strict';

// Requiring our models and passport as we've configured it
const db = require('../models');
// const passport = require('../config/passport');
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.post('/api/cleaning', (req, res) => {
    db.Cleanings.create({
      // address: req.body.address,
      square_ft: req.body.squareft,
      // rate: req.body.rate,
      // existing: req.body.existing,
      frequency: req.body.frequency,
      // next: req.body.next,
      // notes: req.body.notes
    })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        console.log(`Error : ${err}`);
      });
  });
};
