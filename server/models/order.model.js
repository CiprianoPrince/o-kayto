"use strict"
const { Model } = require("sequelize")
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
  Order.init(
    {
      orderID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
      },
      userID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      dateOrdered: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      shippingAddress: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      totalPrice: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ["Processing", "Shipped", "Delivered"],
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  )
  return Order
}
