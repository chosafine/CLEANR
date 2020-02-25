'use_strict';


// This is our User model, which exists to hold user information and login information
// the ID is used when referencing their grocery list (see groceryList.js)
// bcrypt will be used for hashing and salting of the password as well.

// eslint-disable-next-line func-names
module.exports = function (sequelize, DataTypes) {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );

  return Users;
};
