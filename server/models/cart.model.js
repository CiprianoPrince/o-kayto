"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "userID" })
      this.hasOne(models.CartDetail, { foreignKey: "cartID" })
    }
  }
  Cart.init(
    {
      cartID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userID: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "users",
          key: "userID",
        },
      },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  )
  return Cart
}
