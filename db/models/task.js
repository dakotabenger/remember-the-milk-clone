'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    list_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    name: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    tag_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {});
  Task.associate = function(models) {
Task.belongsTo(models.List,{foreignKey:"list_id"})
Task.belongsTo(models.Tag,{foreignKey:"tag_id"})
Task.belongsTo(models.User,{foreignKey:"user_id"}) };
  return Task;
};
