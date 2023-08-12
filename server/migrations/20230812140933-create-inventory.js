"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Inventories", {
      inventoryID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      productID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Products",
          key: "productID",
        },
      },
      variantID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Variants",
          key: "variantID",
        },
      },
      quantityInStock: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      reOrderThreshold: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      lastRestockDate: {
        allowNull: true,
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Inventories")
  },
}
