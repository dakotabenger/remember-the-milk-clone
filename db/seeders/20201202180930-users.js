'use strict';
const bcrypt = require('bcryptjs');
const password = 'password';
const hash = bcrypt.hashSync(password, 10)
const faker = require("faker")

module.exports = {
  up: (queryInterface, Sequelize) => {
    const seedArray = []
    const demoUser = {
        email: "demo@dftm.com",
        hashedPassword: hash,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    seedArray.push(demoUser)
    for (let i = 2; i < 16; i++) {
      const seedData = {
        email: faker.internet.email(),
        hashedPassword: hash,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      seedArray.push(seedData)
    }
    return queryInterface.bulkInsert('Users',seedArray, {});

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
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
