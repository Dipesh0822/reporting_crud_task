
const http = require('http');
const app = require('./connection/express');
const logger = require('./common/logger');
const PORT = process.env.PORT;
const { sequelizeConnection } = require("./connection/database")

try {
    let httpServer = http.createServer(app);
    sequelizeConnection();
    httpServer.listen(PORT, () => {
        logger.success(`HTTP Server running on port ${PORT}`);
    });
} catch (error) {
    logger.error(`Unable to connect to the application: ${error.message}`);
    process.exit(1);
}
