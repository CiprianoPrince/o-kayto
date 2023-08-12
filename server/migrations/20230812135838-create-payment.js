"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Payments", {
      paymentID: {
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
      paymentMethodID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "PaymentMethods",
          key: "paymentMethodID",
        },
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      paymentDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      paymentStatus: {
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
    await queryInterface.dropTable("Payments")
  },
}
