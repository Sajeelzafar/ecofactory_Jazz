'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TechnologyProductCategoryInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TechnologyProductCategoryInfo.belongsTo(models.Merchant, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
        },
      });
      // define association here
    }
  }
  TechnologyProductCategoryInfo.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    productCategory: DataTypes.STRING,
    productSubCategory: DataTypes.STRING,
    merchant_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'TechnologyProductCategoryInfo',
  });
  return TechnologyProductCategoryInfo;
};