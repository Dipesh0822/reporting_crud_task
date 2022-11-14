
require('dotenv').config();
let Sequelize = require('sequelize');

/**
 *  @date 14-11-2022
 *  @desc Enviorment Database
**/
const dbName = process.env.TEST_DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbDriver = process.env.DB_DRIVER;
const dbPassword = process.env.DB_PASSWORD;
const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    "host": dbHost,
    "port": Number(dbPort),
    "dialect": dbDriver,
    "quoteIdentifiers": false
});

module.exports = sequelizeConnection;
