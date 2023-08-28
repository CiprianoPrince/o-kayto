'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductVariant extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Product, { foreignKey: 'productID', onDelete: 'CASCADE' });
            this.belongsTo(models.Variant, { foreignKey: 'variantID', onDelete: 'CASCADE' });
            this.belongsTo(models.Size, { foreignKey: 'sizeID', onDelete: 'SET NULL' });
            this.belongsTo(models.Color, { foreignKey: 'colorID', onDelete: 'SET NULL' });
        }
    }
    ProductVariant.init(
        {
            productID: {
                allowNull: false,
                type: DataTypes.UUID,
                references: {
                    model: 'products',
                    key: 'productID',
                },
                onDelete: 'CASCADE',
                primaryKey: true,
            },
            variantID: {
                allowNull: false,
                type: DataTypes.UUID,
                references: {
                    model: 'variants',
                    key: 'variantID',
                },
                onDelete: 'CASCADE',
                primaryKey: true,
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
        },
        {
            sequelize,
            modelName: 'ProductVariant',
            timestamps: true,
            freezeTableName: true,
            tableName: 'productvariants',
            autoIncrement: false,
        }
    );
    ProductVariant.removeAttribute('id');
    return ProductVariant;
};
