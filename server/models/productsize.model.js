"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class ProductSize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductSize.init(
    {
      productSizeID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
      },
      productID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      sizeID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      quantityInStock: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "ProductSize",
    }
  )
  return ProductSize
}
