'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    description: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
Tag.hasMany(models.Task,{foreignKey:"tag_id"})  };
  return Tag;
};