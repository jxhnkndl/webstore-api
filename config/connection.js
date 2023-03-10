const Sequelize = require('sequelize');

require('dotenv').config();

// establish db connection 
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_HOST,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;