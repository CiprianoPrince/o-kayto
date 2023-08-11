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
      this.belongsTo(models.Order, { foreignKey: "orderID" })
      this.belongsTo(models.Product, { foreignKey: "productID" })
    }
  }
  OrderDetail.init(
    {
      orderDetailID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
      },
      orderID: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "orders",
          key: "orderID",
        },
      },
      productID: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "products",
          key: "productID",
        },
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
