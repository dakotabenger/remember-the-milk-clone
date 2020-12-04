'use strict';
const faker = require("faker")
module.exports = {
  up: (queryInterface, Sequelize) => {
    const seedArray = [];
    for (let i = 1; i < 26; i++ ) {
      let userId = 0
      if (i >= 15) {
        userId = 1
      } else {
        userId++
      }
      const seedData = {
        id: i,
        name: faker.lorem.word(),
        user_id: userId,
        createdAt: new Date(),
        updatedAt: new Date()

      }
      seedArray.push(seedData)
    }
    return queryInterface.bulkInsert('Lists', seedArray, {});
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
    return queryInterface.bulkDelete('Lists', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
