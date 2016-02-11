'use strict';
module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define('Orders', {
    cart: DataTypes.STRING,
    total: DataTypes.FLOAT,
    tax: DataTypes.FLOAT,
    final_total: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Orders;
};