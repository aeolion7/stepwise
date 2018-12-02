const Sequelize = require('sequelize');
const db = require('./db');

const Module = db.define('module', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allownull: false
  }
});

module.exports = Module;
