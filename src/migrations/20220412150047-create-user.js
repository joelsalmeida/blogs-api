'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: { primaryKey: true, autoIncrement: true, allowNull: false, type: Sequelize.INTEGER },
      displayName: { field: 'display_name', type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, unique: true, allowNull: false },
      password: { type: Sequelize.STRING(6), allowNull: false },
      image: { type: Sequelize.STRING, allowNull: false },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};