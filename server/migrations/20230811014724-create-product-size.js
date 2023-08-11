"use strict"

const { DataTypes } = require("sequelize")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductSizes", {
      productSizeID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
      },
      productID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      sizeID: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      quantityInStock: {
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
    await queryInterface.dropTable("ProductSizes")
  },
}
