'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // yesterday's date as  constant
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    return queryInterface.bulkInsert('beds', [{
      id: 1,
      name: 'Bed 1',
      createdAt: new Date(),
      updatedAt: new Date(),
      lastWatered: yesterday
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('beds', { name: 'Bed 1' });
  }
};
