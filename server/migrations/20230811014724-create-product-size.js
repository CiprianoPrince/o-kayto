"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductSizes", {
      productSizeID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      productID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "products",
          key: "productID",
        },
      },
      sizeID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "sizes",
          key: "sizeID",
        },
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
