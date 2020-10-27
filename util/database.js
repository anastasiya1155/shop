const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop', 'root', process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
