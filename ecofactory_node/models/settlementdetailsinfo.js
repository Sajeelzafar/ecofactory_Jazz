'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SettlementDetailsInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SettlementDetailsInfo.belongsTo(models.Merchant, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
        },
      });
      // define association here
    }
  }
  SettlementDetailsInfo.init({
    bankName: DataTypes.STRING,
    bankAccountNumber: DataTypes.STRING,
    accountHolderName: DataTypes.STRING,
    accountHolderMobileNumber: DataTypes.STRING,
    accountHolderEmail: DataTypes.STRING,
    merchant_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'SettlementDetailsInfo',
  });
  return SettlementDetailsInfo;
};