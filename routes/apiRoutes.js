'use_strict';

// Requiring our models and passport as we've configured it
const db = require('../models');

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.post('/api/cleaning', (req, res) => {
    db.Cleanings.create({
      id: req.body.id,
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
  
  app.get('/api/all', (req, res) => {
    db.User_Cleanings.findAll({
      where: { userId: req.user },
      include: [
        {
          model: db.Bookings,
          required: true
        }
      ]
    }).then(bookings => {
      // we're doing this god awful black magic because for
      // some reason sequelize doesn't send back a nice json object for us
      let bookingData = JSON.stringify(bookings);
      let actualBookingData = JSON.parse(bookingData);
      
      // return json
      res.json(actualBookingData);
    });
  });
};
