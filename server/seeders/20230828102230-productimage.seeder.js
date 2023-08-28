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
            'ProductImages',
            await readJsonFile('./storage/data/productImages.json'),
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('ProductImages', null, {});
    },
};
