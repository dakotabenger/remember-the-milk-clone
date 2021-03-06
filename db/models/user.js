'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Task,{foreignKey:"user_id"})
    User.hasMany(models.Tag,{foreignKey:"user_id"})
    User.hasMany(models.List,{foreignKey:"user_id"})
  };
  return User;
};


