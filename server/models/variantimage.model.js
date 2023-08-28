'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class VariantImage extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Variant, { foreignKey: 'variantID', onDelete: 'CASCADE' });
        }
    }
    VariantImage.init(
        {
            variantImageID: {
                primaryKey: true,
                allowNull: false,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            variantID: {
                allowNull: false,
                type: DataTypes.UUID,
                references: {
                    model: 'variants',
                    key: 'variantID',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            imagePath: {
                allowNull: true,
                type: DataTypes.STRING,
            },
            altText: {
                allowNull: true,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'VariantImage',
        }
    );
    return VariantImage;
};
