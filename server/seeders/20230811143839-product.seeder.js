'use strict';
const readJsonFile = require('../utils/readJsonFile');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
     * Add seed commands here.
     *
     Example:
     */
        await queryInterface.bulkInsert(
            'Products',
            await readJsonFile('./storage/data/products.json'),
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Products', null, {});
    },
};
