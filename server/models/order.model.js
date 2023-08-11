'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    orderID: DataTypes.UUID,
    userID: DataTypes.UUID,
    dateOrdered: DataTypes.DATE,
    shippingAddress: DataTypes.STRING,
    totalPrice: DataTypes.BIGINT,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};