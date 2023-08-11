"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product, { foreignKey: "productID" })
    }
  }
  Image.init(
    {
      imageID: {
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
      imagePath: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      altText: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Image",
    }
  )
  return Image
}
