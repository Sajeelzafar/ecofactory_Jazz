'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductChoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductChoice.belongsTo(models.Merchant, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
        },
      });
      // define association here
    }
  }
  ProductChoice.init({
    paymentGateway: DataTypes.JSON,
    coorporateCollection: DataTypes.JSON,
    coorporateDisbursement: DataTypes.JSON,
    merchant_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'ProductChoice',
  });
  return ProductChoice;
};