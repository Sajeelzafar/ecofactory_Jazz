'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Complaint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Complaint.init({
    fullName: DataTypes.STRING,
    companyName: DataTypes.STRING,
    complaintType: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    priority: DataTypes.STRING,
    message: DataTypes.STRING,
    status: DataTypes.STRING,
    anwserToMessage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Complaint',
  });
  return Complaint;
};