"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reviews", {
      reviewID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      userID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "userID",
        },
      },
      productID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "products",
          key: "productID",
        },
      },
      rating: {
        allowNull: true,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      comment: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      datePosted: {
        allowNull: false,
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
    await queryInterface.dropTable("Reviews")
  },
}
