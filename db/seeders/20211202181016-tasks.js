'use strict';
const faker = require("faker")
module.exports = {
  up: (queryInterface, Sequelize) => {
    const seedArray = [];
    for (let i= 1; i <26;i++){
      let tagId = 0;
      let listId = 0;
      if (i % 25 === 0) {
        tagId = 1
        listId = 1
      } else {
        tagId++
        listId++
      }
      const demoUserData = {
        id: i,
        description: faker.lorem.sentence(),
        name: faker.lorem.word(),
        priority: Math.floor(Math.random() * 3.9),
        start_date: new Date(),
        end_date: faker.date.soon(),
        tag_id: tagId,
        user_id: 1,
        list_id: listId,
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
        }
        seedArray.push(demoUserData)
    }
    for (let i = 26; i < 276; i++) {
      let tagId = 0;
      let userId = 0;
      let listId = 0;
      if (i % 25 === 0) {
        tagId = 1
        listId = 1
      } else {
        tagId++
        listId++
      }

      if (i % 15 === 0 || (i >= 270 && i <= 275)) {
        userId = 1
      } else {
        userId++
      }

      

      
      const seedData = {
        id: i,
        description: faker.lorem.sentence(),
        name: faker.lorem.word(),
        priority: Math.floor(Math.random() * 3.9),
        start_date: new Date(),
        end_date: faker.date.soon(),
        tag_id: tagId,
        user_id: 1,
        list_id: listId,
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      seedArray.push(seedData)
    }
    return queryInterface.bulkInsert('Tasks', seedArray, {});
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
