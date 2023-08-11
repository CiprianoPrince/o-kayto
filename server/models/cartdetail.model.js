"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class CartDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartDetail.init(
    {
      cartDetailID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
      },
      cartID: {
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
    },
    {
      sequelize,
      modelName: "CartDetail",
    }
  )
  return CartDetail
}
