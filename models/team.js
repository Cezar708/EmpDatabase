'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('team', {
    name: {
      type: DataTypes.STRING,
    },
    room: {
      type: DataTypes.STRING,
    },
    program: {
      type: DataTypes.STRING,
    },
    short_name: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {
         Model.belongsToMany(models.employee, {through: models.employee_team, foreignKey: 'team_id'});
      }
    },
    tableName: 'team',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

