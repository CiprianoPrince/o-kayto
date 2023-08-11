"use strict"

const { DataTypes } = require("sequelize")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      orderID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
      },
      userID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      dateOrdered: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      shippingAddress: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["Processing", "Shipped", "Delivered"],
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
    await queryInterface.dropTable("Orders")
  },
}
