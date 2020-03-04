// This is our User Cleaning model, which serves to take cleanings a user has
// created and also reference them to a user ID. We will keep
// cleaning IDs and them have User IDs associated with them, so if we look
// up by a user ID we can see all of the cleaning IDs assigned to them ->
// therefore a list of services created by each user!

module.exports = function (sequelize, DataTypes) {
  const userCleaning = sequelize.define(
    'User_Cleanings',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
      },
      // reference the products by ID from the products table
      cleaning_id: {
        type: DataTypes.INTEGER,
      },
      // reference the user by their ID from the user table
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    },
  );
  // associate the many cleanings to this cleaning list
  userCleaning.associate = function (models) {
    userCleaning.hasMany(models.Cleanings, {
      foreignKey: 'id',
      sourceKey: 'cleaning_id',
    });
  };

  return userCleaning;
};
