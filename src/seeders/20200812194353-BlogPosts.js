module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Blog_posts',
      [
        {
          id: 1,
          title: 'Lewis Hamilton',
          content: 'British motorsports racing driver.',
          user_id: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
        },
        {
          id: 2,
          title: 'Michael Schumacher',
          content: 'German former motorsports racing driver.',
          user_id: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Blog_posts', null, {});
  },
};
