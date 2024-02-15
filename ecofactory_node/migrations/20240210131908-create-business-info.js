'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BusinessInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      faxNumber: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      businessNature: {
        type: Sequelize.STRING
      },
      ntnIssueAuthority: {
        type: Sequelize.STRING
      },
      ntnNumber: {
        type: Sequelize.INTEGER
      },
      issueDate: {
        type: Sequelize.DATE
      },
      registerDate: {
        type: Sequelize.DATE
      },
      employeesNo: {
        type: Sequelize.INTEGER
      },
      monthlyTurnover: {
        type: Sequelize.INTEGER
      },
      averageSalaryAmount: {
        type: Sequelize.INTEGER
      },
      frequencyOfSalaryDisbursement: {
        type: Sequelize.STRING
      },
      merchant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Merchants',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BusinessInfos');
  }
};