'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('history_employee', {
    email: {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    date: {
      type: DataTypes.DATE,
      primaryKey: true 
    },
    change_from: {
      type: DataTypes.STRING,
    },
    change_to: {
      type: DataTypes.STRING,
    },
    veryfied: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'history_employee',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

