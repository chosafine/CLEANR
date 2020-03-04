// Requiring environment variables
require("dotenv").config();
// Requiring necessary npm packages
const express = require("express");
// const session = require('express-session');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Setting headers to allow CORS requests so post/get request on client side works
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Setting our API routes and general HTML handler
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// Server must be sync'd to MySQL database on launch, ensuring that happens before listener spins up
db.sequelize.sync({ force: false, logging: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
