// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = function (app) {

  // Post handle to create a new cleaning when user is being onboarded
  app.post('/api/cleaning', (req, res) => {
  
    // Connect to database and create cleaning by using the items provided in the req.body object
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
      // Send back response for page to handle
      .then((response) => {
        res.json(response);
      })
      // Error handler
      .catch((err) => {
        console.log(`Error : ${err}`);
      });
  });
  
  // Get request to get all of a users booked cleanings by using their user ID to find cleanings in relational database
  app.get('/api/all', (req, res) => {
  
    // The where is asking for the user ID so we can use that to include bookings 
    // with the same id to ensure we're only getting that specific users cleanings
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
