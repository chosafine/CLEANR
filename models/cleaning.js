// This is our Cleaning model, we use this to store service information
// for the client. A cleaning will get an ID, name, type, date, and price based
// off of information entered into the object being sent from the front end
// we also have an associate function to setup this database being relational to 
// the User_Cleanings model by the cleaning ID

module.exports = function (sequelize, DataTypes) {
  const Cleaning = sequelize.define(
    'Cleanings',
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        defaultValue: DataTypes.INTEGER,
        primaryKey: true,
        notNull: true
      },
      address: DataTypes.STRING,
      square_ft: DataTypes.STRING,
      rate: DataTypes.DECIMAL(65, 2),
      existing: DataTypes.BOOLEAN,
      frequency: DataTypes.STRING,
      next: DataTypes.STRING,
      notes: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  Cleaning.associate = function (models) {
    Cleaning.belongsTo(models.User_Cleanings, {
      foreignKey: 'id',
      targetKey: 'cleaning_id',
    });
  };

  return Cleaning;
};
