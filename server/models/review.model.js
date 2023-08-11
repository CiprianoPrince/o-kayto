"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init(
    {
      reviewID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
      },
      userID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      productID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      rating: {
        allowNull: true,
        type: DataTypes.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      comment: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      datePosted: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  )
  return Review
}
