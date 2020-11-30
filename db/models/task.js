'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    list_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    name: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    tag_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {});
  Task.associate = function(models) {
Task.hasOne(models.List,{foreignKey:"list_id"})
Task.hasOne(models.Tag,{foreignKey:"tag_id"})
Task.belongssTo(models.User,{foreignKey:"user_id"})  };
  return Task;
};