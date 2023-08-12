'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SaleDetail.init({
    saleDetailID: DataTypes.UUID,
    saleID: DataTypes.UUID,
    productID: DataTypes.UUID,
    quantity: DataTypes.INTEGER,
    pricePerUnit: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SaleDetail',
  });
  return SaleDetail;
};