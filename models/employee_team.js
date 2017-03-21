'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('employee_team', {
    email: {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'employee_team',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

