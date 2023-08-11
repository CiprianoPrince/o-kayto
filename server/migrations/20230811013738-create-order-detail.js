"use strict"

const { DataTypes } = require("sequelize")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("OrderDetails", {
      orderDetailID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
      },
      orderID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      productID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("OrderDetails")
  },
}
