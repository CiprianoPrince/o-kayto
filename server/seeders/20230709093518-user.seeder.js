"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: "59754847-9a8c-4038-b7d1-dd31369047d9",
          name: "John Doe",
          email: "JohnDoe@gmail.com",
        },
        {
          id: "56825df3-cf47-475f-8acd-9e58b0304bfb",
          name: "Jane Doe",
          email: "JaneDoe@gmail.com",
        },
        {
          id: "2d51c027-6988-4655-bc42-98e711d29dbe",
          name: "Mac Doe",
          email: "MacDoe@gmail.com",
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {})
  },
}
