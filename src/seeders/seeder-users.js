'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{

      firstName: 'Johnfdfd',
      lastName: 'Dodddewewewde',
      address: 'fdfddddddddfd',
      gender: '1',
      roleId: 'cc',
      createdAt: new Date(),
      updatedAt: new Date(),


    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
