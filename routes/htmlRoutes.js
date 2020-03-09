const path = require("path");

module.exports = function(app) {
  // Send every other request to the React app
  // Define any API routes before this runs
  app.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
};
