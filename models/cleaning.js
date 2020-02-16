"use_strict";

// This is our Cleaning model, we use this to store service information
// for the client. A cleaning will get an ID, name, type, date, and price based
// off of information entered into the object being sent from the front end

module.exports = function(sequelize, DataTypes) {
  const Cleanings = sequelize.define(
    "Cleanings",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      product_name: DataTypes.STRING,
      image_src: DataTypes.STRING,
      selling_price: DataTypes.DECIMAL(10, 2),
      tax_exempt: DataTypes.BOOLEAN,
      tax_percentage: DataTypes.INTEGER,
      category: DataTypes.STRING,
      barcode: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );

  Cleaning.associate = function(models) {
    Cleaning.belongsTo(models.User_Cleanings, {
      foreignKey: "id",
      targetKey: "cleaning_id"
    });
  };

  return Products;
};
