"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Refunds", {
      refundID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      paymentID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Payments",
          key: "paymentID",
        },
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      refundDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      reason: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Refunds")
  },
}
