'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WishlistDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WishlistDetail.init({
    wishlistDetailID: DataTypes.UUID,
    wistlistID: DataTypes.UUID,
    productID: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'WishlistDetail',
  });
  return WishlistDetail;
};