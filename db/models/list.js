'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  List.associate = function(models) {
List.hasMany(models.Task, {foreignKey: "list_id"})
List.belongsTo(models.User, {foreignKey: "user_id"})
  };
  return List;
};