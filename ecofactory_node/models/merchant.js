'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Merchant.hasOne(models.ProductChoice, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
          onDelete: 'CASCADE',
        },
      });
      Merchant.hasOne(models.BusinessInfo, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
          onDelete: 'CASCADE',
        },
      });
      Merchant.hasOne(models.ProductChoice, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
          onDelete: 'CASCADE',
        },
      });
      Merchant.hasMany(models.DirectorsInfo, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
          onDelete: 'CASCADE',
        },
      });
      Merchant.hasMany(models.AuthorisePersonnelInfo, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
          onDelete: 'CASCADE',
        },
      });
      Merchant.hasOne(models.TechnologyProductCategoryInfo, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
          onDelete: 'CASCADE',
        },
      });
      Merchant.hasOne(models.SettlementDetailsInfo, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
          onDelete: 'CASCADE',
        },
      });
      // define association here
    }
  }
  Merchant.init({
    fullName: DataTypes.STRING,
    businessName: DataTypes.STRING,
    mobileNumber: DataTypes.NUMBER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    company_type: DataTypes.STRING,
    role: DataTypes.STRING,
    accountOpenerStatus: DataTypes.BOOLEAN,
    bankAccountStatus: DataTypes.BOOLEAN,
    higherManagementStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Merchant',
  });
  return Merchant;
};