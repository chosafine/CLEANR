// Requiring our models and passport as we've configured it
const db = require("../models");
const Sequelize = require("sequelize");
const passport = require("../config/passport");

module.exports = function(app) {
  // Post handle to create a new cleaning when user is being onboarded
  app.post("/api/cleaning", (req, res) => {
    // Connect to database and create cleaning by using the items provided in the req.body object
    db.Cleanings.create({
      id: req.body.id,
      address: req.body.address,
      square_ft: req.body.squareft,
      rate: req.body.price,
      // existing: req.body.existing,
      frequency: req.body.frequency
      // next: req.body.next,
      // notes: req.body.notes
    })
      // Send back response for page to handle
      .then(response => {
        db.User_Cleanings.create({
          user_id: req.session.userId || req.user,
          cleaning_id: req.body.id
        })
          .then(data => {
            res.json(data);
          })
          // Error handler
          .catch(err => {
            console.log(`Error : ${err}`);
          });
      });
  });

  // Get request to get all of a users booked cleanings by using their user ID to find cleanings in relational database
  app.get("/api/all", (req, res) => {
    // The where is asking for the user ID so we can use that to include bookings
    // with the same id to ensure we're only getting that specific users cleanings
    db.User_Cleanings.findAll({
      where: { user_id: req.session.userId || req.user },
      include: [
        {
          model: db.Cleanings,
          required: true
        }
      ]
    })
      .then(cleanings => {
        let arr = [];
        for (cleaning in cleanings) {
          arr.push(cleanings[cleaning].dataValues.cleaning_id);
        }
        return arr;
      })
      .then(arr => {
        db.Cleanings.findAll({
          where: { id: { [Sequelize.Op.in]: arr } }
        }).then(response => res.json(response));
      });
  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // When user is logged in we're also going to set an user id header for various
    // bits of the front end, such as pulling items from the database
    res.json({
      user: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.Users.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (user) {
          res.send({ msg: "Email already exists" });
        } else {
          db.Users.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password
          })
            .then(user => {
              req.session.userId = user.dataValues.id;
              return res.json({
                user: user.dataValues.id
              });
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(`Error : ${err}`);
      });
  });

  // Simple destroy session route for logging out
  app.get("/api/logout", (req, res, next) => {
    if (req.session) {
      req.session.destroy(error => {
        if (error) {
          return next(error);
        } else {
          return res.json();
        }
      });
    }
  });
};
