'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ProductVariants', {
            productID: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'products',
                    key: 'productID',
                },
                onDelete: 'CASCADE',
                primaryKey: true,
            },
            variantID: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'variants',
                    key: 'variantID',
                },
                onDelete: 'CASCADE',
                primaryKey: true,
            },
            sizeID: {
                allowNull: true,
                type: Sequelize.UUID,
                references: {
                    model: 'sizes',
                    key: 'sizeID',
                },
                onDelete: 'SET NULL',
            },
            colorID: {
                allowNull: true,
                type: Sequelize.UUID,
                references: {
                    model: 'colors',
                    key: 'colorID',
                },
                onDelete: 'SET NULL',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('ProductVariants');
    },
};
