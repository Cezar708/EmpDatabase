'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('employee_program', {
    email: {
      type: DataTypes.STRING,
    },
    program_id: {
      type: DataTypes.INTEGER,
    },
    workload: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'employee_program',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

