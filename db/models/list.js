'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    description: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  List.associate = function(models) {
List.hasMany(models.Task, {foreignKey: "list_id"})
  };
  return List;
};