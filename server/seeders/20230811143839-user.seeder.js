"use strict"

const generateFakeUser = require("../helpers/generateFakeUser")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     Example:
     */
    await queryInterface.bulkInsert(
      "Users",
      new Array(100).fill(undefined).map(generateFakeUser),
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {})
  },
}
