"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product, { foreignKey: "productID" })
      this.hasMany(models.Inventory, { foreignKey: "variantID" })
    }
  }
  Variant.init(
    {
      variantID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      productID: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "products",
          key: "productID",
        },
      },
      size: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ["S", "M", "L", "XL"],
      },
      color: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ["Maroon", "Navy"],
      },
    },
    {
      sequelize,
      modelName: "Variant",
    }
  )
  return Variant
}
