// This is our index file used for general setup of the Sequelize ORM
// it is configured right now to use a .ENV file in the directory of this project
// to get configuration information for the local MySQL server, which should be:
// DB_HOST=HOST
// DB_USER=USER
// DB_PASSWORD=PASSWORD
// DB_DATABASE=DB
// DB_PORT=PORT
// Replace the values after equals with your specific variables of course
// By default we assume development as the environment however NODE_ENV
// can be set to production or testing as needed by your team

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};
require("dotenv").config();

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    process.env.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
