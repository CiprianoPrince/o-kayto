'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sales.init({
    saleID: DataTypes.UUID,
    orderID: DataTypes.UUID,
    paymentID: DataTypes.UUID,
    userID: DataTypes.UUID,
    totalAmount: DataTypes.INTEGER,
    saleDate: DataTypes.DATE,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Sales',
  });
  return Sales;
};