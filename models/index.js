'use strict';
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

let databaseOptions = {
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  // Sequelize expects `pool` options to be named `max` and `min`.
  // Using `maxConnections` and `minConnections` leaves the pool
  // configuration ineffective and can exhaust database connections.
  pool: { max: 10, min: 1 }
};

if (process.env.SSL_DATABASE) {
  databaseOptions.dialectOptions = { ssl: true };
}

let sequelize = new Sequelize(process.env.DATABASE_URL, databaseOptions);
let db = {};

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function (file) {
    try {
      var model = sequelize['import'](path.join(__dirname, file));
      db[model.name] = model;
    } catch (error) {
      console.error('Model creation error: ' + error);
    }
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

