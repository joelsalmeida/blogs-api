module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Post_categories',
      [
        {
          post_id: 1,
          category_id: 1,
        },
        {
          post_id: 2,
          category_id: 2,
        },

      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Post_categories', null, {});
  },
};
