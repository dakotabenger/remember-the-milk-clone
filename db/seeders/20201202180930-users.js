'use strict';
const bcrypt = require('bcryptjs');
const password = 'password';
const hash = bcrypt.hashSync(password, 10)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        email: 'test5@gmail.com',
        hashedPassword: hash,
        createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    id: 2,
    email: 'test6@gmail.com',
    hashedPassword: hash,
    createdAt: new Date(),
    updatedAt: new Date()
}],
  );

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
