module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Categories',
      [
        {
          id: 1,
          name: 'British',
        },
        {
          id: 2,
          name: 'German',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
