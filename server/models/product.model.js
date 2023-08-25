"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, { foreignKey: "categoryID" })
      this.hasMany(models.CartDetail, { foreignKey: "productID" })
      this.hasMany(models.OrderDetail, { foreignKey: "productID" })
      this.hasMany(models.WishlistDetail, { foreignKey: "productID" })
      this.hasMany(models.ProductSize, { foreignKey: "productID" })
      this.hasMany(models.SaleDetail, { foreignKey: "saleID" })
      this.hasMany(models.Variant, { foreignKey: "productID" })
      this.hasOne(models.Inventory, { foreignKey: "productID" })
      this.hasOne(models.Image, { foreignKey: "productID" })
    }
  }
  Product.init(
    {
      productID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      InventoryID: {
        allowNull: false,
        type: DataTypes.UUID,
         references: {
          model: "inventories",
          key: "InventoryID",
        },
      },
      categoryID: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "categories",
          key: "categoryID",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  )
  return Product
}
