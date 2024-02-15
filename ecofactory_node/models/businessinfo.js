'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusinessInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BusinessInfo.belongsTo(models.Merchant, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
        },
      });
      // define association here
    }
  }
  BusinessInfo.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.NUMBER,
    faxNumber: DataTypes.NUMBER,
    email: DataTypes.STRING,
    businessNature: DataTypes.STRING,
    ntnIssueAuthority: DataTypes.STRING,
    ntnNumber: DataTypes.NUMBER,
    issueDate: DataTypes.DATE,
    registerDate: DataTypes.DATE,
    employeesNo: DataTypes.NUMBER,
    monthlyTurnover: DataTypes.NUMBER,
    averageSalaryAmount: DataTypes.NUMBER,
    frequencyOfSalaryDisbursement: DataTypes.STRING,
    merchant_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'BusinessInfo',
  });
  return BusinessInfo;
};