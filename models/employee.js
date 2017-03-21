'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('employee', {
    email: {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.STRING,
    },
    clan: {
      type: DataTypes.STRING,
    },
    max_employee_id: {
      type: DataTypes.STRING,
    },
    dept: {
      type: DataTypes.STRING,
    },
    manager_email: {
      type: DataTypes.STRING,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
    pearson_id: {
      type: DataTypes.INTEGER,
    }, 
  }, {
    classMethods: {
      associate: () => {
          Model.hasMany(models.history_employee,  {foreignKey: 'email'});
          Model.belongsToMany(models.program, {through: models.employee_program, foreignKey: 'email'});
          Model.belongsToMany(models.team, {through: models.employee_team, foreignKey: 'email'});
      }
    },
    tableName: 'employee',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

