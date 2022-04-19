module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Post_categories', {
      postId: {
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: {
          model: 'Blog_posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Post_categories');
  },
};