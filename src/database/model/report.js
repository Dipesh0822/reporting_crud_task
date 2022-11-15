const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
    const report = sequelize.define('reports', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        short_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paramaters: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sql_string: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        }
    }, { tableName: 'reports', timestamps: false });
    return report;
};