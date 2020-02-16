const path = require("path");
const db = require("../models");

module.exports = function(app) {
  // Send every other request to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
};
