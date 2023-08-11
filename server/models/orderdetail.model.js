"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetail.init(
    {
      orderDetailID: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      orderID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      productID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  )
  return OrderDetail
}
