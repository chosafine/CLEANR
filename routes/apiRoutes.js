"use_strict";

// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

// eslint-disable-next-line func-names
module.exports = function(app) {

  app.post("/api/cleaning", (req, res) => {
    let errors = [];
          db.Cleaning.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password
          })
            .then(response => {
              res.json(response);
            })
      .catch(err => {
        console.log(`Error : ${err}`);
      });
  });

};
