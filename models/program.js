'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('program', {
    name: {
      type: DataTypes.STRING,
    },
    short_name: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {
    Model.belongsToMany(models.employee, {through: models.employee_program, foreignKey: 'program_id'});
      }
    },
    tableName: 'program',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

