'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        id: 1,
        description: 'Wash Car',
        name: 'Task 1',
        priority: 2,
        start_date: new Date(),
        end_date: new Date(),
        tag_id: null,
        user_id: 1,
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        description: 'Wash Car 2',
        name: 'Task 2',
        priority: 3,
        start_date: new Date(),
        end_date: new Date(),
        tag_id: null,
        user_id: 2,
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        description: 'Wash Car 3',
        name: 'Task 3',
        priority: 2,
        start_date: new Date(),
        end_date: new Date(),
        tag_id: null,
        user_id: 1,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
