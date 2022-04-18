'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Blog_posts', {
      id: { primaryKey: true, autoIncrement: true, allowNull: false, type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING, allowNull: false },
      content: { type: Sequelize.STRING, allowNull: false },
      userId: { field: 'user_id', type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'Users', key: 'id'}
      }, 
      published: { type: Sequelize.DATE, allowNull: false },
      updated: { type: Sequelize.DATE },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Blog_posts');
  }
};