const Sequelize = require('sequelize');
// const { sequelizeConnection } = require('../connection/database');
const { applyForeignKeySetup } = require('./reference');
const logger = require('./../common/logger');

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
const connSequelize = new Sequelize(dbName, dbUser, dbPassword, {
    "host": dbHost,
    "port": Number(dbPort),
    "dialect": dbDriver,
    "quoteIdentifiers": false
});

const modelDefiners = [
    require('./model/user')
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(connSequelize);
}

// applyForeignKeySetup(connSequelize);

connSequelize.sync({ force: true })
    .then(() => {
        logger.success(`Database & tables created!`)
    });

module.exports = connSequelize;