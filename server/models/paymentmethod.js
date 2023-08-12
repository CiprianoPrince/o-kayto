'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentMethod.init({
    paymentMethodID: DataTypes.UUID,
    userID: DataTypes.UUID,
    type: DataTypes.ENUM,
    cardNumber: DataTypes.BIGINT,
    expiryDate: DataTypes.INTEGER,
    cardHolderName: DataTypes.STRING,
    bankName: DataTypes.STRING,
    dateAdded: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'PaymentMethod',
  });
  return PaymentMethod;
};