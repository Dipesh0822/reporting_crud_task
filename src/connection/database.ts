import { Dialect, Sequelize } from 'sequelize'

const dbName = process.env.TEST_DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT 
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD
const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    "host": dbHost,
    "port": Number(dbPort),
    "dialect": dbDriver,
    "quoteIdentifiers": false
});
export default sequelizeConnection;