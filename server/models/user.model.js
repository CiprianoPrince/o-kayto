"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Cart, { foreignKey: "userID" })
    }
  }
  User.init(
    {
      userID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: true,
        type: DataTypes.BIGINT,
      },
      dateRegistered: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  )
  return User
}
