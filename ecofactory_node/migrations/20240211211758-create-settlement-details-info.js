'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SettlementDetailsInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bankName: {
        type: Sequelize.STRING
      },
      bankAccountNumber: {
        type: Sequelize.STRING
      },
      accountHolderName: {
        type: Sequelize.STRING
      },
      accountHolderMobileNumber: {
        type: Sequelize.STRING
      },
      accountHolderEmail: {
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
    await queryInterface.dropTable('SettlementDetailsInfos');
  }
};