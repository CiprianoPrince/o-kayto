'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Variant extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Product, { foreignKey: 'productID' });
            this.hasOne(models.Inventory, { foreignKey: 'variantID' });
            this.hasOne(models.VariantImage, { foreignKey: 'variantID' });
            this.hasOne(models.ProductVariant), { foreignKey: 'variantID' };
        }
    }
    Variant.init(
        {
            variantID: {
                primaryKey: true,
                allowNull: false,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            productID: {
                allowNull: false,
                type: DataTypes.UUID,
                references: {
                    model: 'products',
                    key: 'productID',
                },
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
            modelName: 'Variant',
            hooks: {
                afterCreate: async (variant, options) => {
                    const { sequelize } = variant;

                    // Accessing extra data from options
                    const inventoryData = options.extraData.inventory;
                    const imageData = options.extraData.image;
                    const sizeID = options.extraData.sizeID;
                    const colorID = options.extraData.colorID;

                    // Create associated Inventory
                    await sequelize.models.Inventory.create({
                        ...inventoryData,
                        variantID: variant.variantID,
                    });

                    // Create associated Image
                    await sequelize.models.VariantImage.create({
                        ...imageData,
                        variantID: variant.variantID,
                    });

                    await sequelize.models.ProductVariant.create({
                        productID: variant.productID,
                        variantID: variant.variantID,
                        sizeID: sizeID,
                        colorID: colorID,
                    });
                },
            },
        }
    );
    return Variant;
};
