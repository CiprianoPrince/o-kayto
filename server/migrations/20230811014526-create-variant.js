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
                onDelete: 'CASCADE',
            },
            sizeID: {
                allowNull: true,
                type: DataTypes.UUID,
                references: {
                    model: 'sizes',
                    key: 'sizeID',
                },
                onDelete: 'SET NULL',
            },
            colorID: {
                allowNull: true,
                type: DataTypes.UUID,
                references: {
                    model: 'colors',
                    key: 'colorID',
                },
                onDelete: 'SET NULL',
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
