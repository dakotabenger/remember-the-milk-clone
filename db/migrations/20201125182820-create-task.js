'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      list_id: {
        type: Sequelize.INTEGER,
        references: { model: "Lists" },
      },
      description: {
        allowNull:false,
        type: Sequelize.STRING
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      tag_id: {
        references: { model: "Tags" },
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Date.now()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};