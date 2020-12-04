'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    description: DataTypes.STRING,
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Tag.associate = function(models) {
Tag.hasMany(models.Task,{foreignKey:"tag_id"})
Tag.belongsTo(models.User,{foreignKey:"user_id"})
};
  return Tag;
};
