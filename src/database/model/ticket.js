const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
    const ticket = sequelize.define('tickets', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.ENUM('created', 'assign', 'backlog', 'working', 'completed', 'pending'),
            defaultValue: 'created',
        },
        priority: {
            type: DataTypes.ENUM('normal', 'medium', 'high'),
            defaultValue: 'normal',
        },
        created_at: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        }
    }, { tableName: 'tickets', timestamps: false });
    return ticket;
};