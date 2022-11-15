

const initConnection = require("./../database/init");
const logger = require("./../common/logger");

/**
 *  @date 14-11-2022
 *  @desc Enviorment Database
**/
const sequelizeConnection = async () => {
    try {
        await initConnection.authenticate();
        logger.success(`Connect Database`);
    } catch (error) {
        logger.error(`Unable to connect database : ${error.message}`);
        process.exit(1);
    }
}

module.exports = { sequelizeConnection };