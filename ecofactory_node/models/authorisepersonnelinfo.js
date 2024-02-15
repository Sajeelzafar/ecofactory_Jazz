'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthorisePersonnelInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AuthorisePersonnelInfo.belongsTo(models.Merchant, {
        foreignKey: {
          name: "merchant_id",
          allowNull: false,
        },
      });
      // define association here
    }
  }
  AuthorisePersonnelInfo.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    title: DataTypes.STRING,
    merchant_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'AuthorisePersonnelInfo',
  });
  return AuthorisePersonnelInfo;
};