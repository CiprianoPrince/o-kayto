'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Variants', {
            variantID: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            productID: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'products',
                    key: 'productID',
                },
            },
            size: {
                allowNull: false,
                type: Sequelize.ENUM,
                values: ['S', 'M', 'L', 'XL'],
            },
            color: {
                allowNull: false,
                type: Sequelize.ENUM,
                values: ['Maroon', 'Navy'],
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Variants');
    },
};
