'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductSize extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Product, { foreignKey: 'productID' });
            this.belongsTo(models.Size, { foreignKey: 'sizeID' });
        }
    }
    ProductSize.init(
        {
            productSizeID: {
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
                allowNull: false,
                type: DataTypes.UUID,
                references: {
                    model: 'sizes',
                    key: 'sizeID',
                },
            },
            quantityInStock: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: 'ProductSize',
        }
    );
    return ProductSize;
};
