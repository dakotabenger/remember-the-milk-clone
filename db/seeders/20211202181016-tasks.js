'use strict';
const faker = require("faker")
module.exports = {
  up: (queryInterface, Sequelize) => {
    const seedArray = [];
    let boolean;

    if (i % 3 === 0) {
      boolean = true
    } else {
      boolean = false
    }
    let tagId = 0;
    let listId = 0;
    for (let i= 1; i <26;i++){
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
        completed: boolean,
        createdAt: new Date(),
        updatedAt: new Date()
        }
        seedArray.push(demoUserData)
    }
    let tagId2 = 0
    let userId = 0;
    let listId2 = 0;
    for (let i = 26; i < 276; i++) {
      let boolean;

      if (i % 3 === 0) {
        boolean = true
      } else {
        boolean = false
      }
      if (i % 25 === 0) {
        tagId2 = 1
        listId2 = 1
      } else {
        tagId2++
        listId2++
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
        tag_id: tagId2,
        user_id: userId,
        list_id: listId2,
        completed: boolean,
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
