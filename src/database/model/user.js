const { DataTypes } = require('sequelize');
// const { sequelizeConnection } = require('../../connection/database');

module.exports = async (sequelize) => {
    const user = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "ACTIVE"
        },
        country_code: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "IN"
        },
        created_at: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        }
    }, { tableName: 'users', timestamps: false });
    return user;
};
