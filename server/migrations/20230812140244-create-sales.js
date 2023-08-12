"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Sales", {
      saleID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      orderID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Orders",
          key: "orderID",
        },
      },
      paymentID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Payments",
          key: "paymentID",
        },
      },
      userID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "userID",
          key: "userID",
        },
      },
      totalAmount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM,
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
    await queryInterface.dropTable("Sales")
  },
}
