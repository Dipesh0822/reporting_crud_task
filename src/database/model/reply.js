const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
    const reply = sequelize.define('replies', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        reply_text: {
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
    }, { tableName: 'replies', timestamps: false });
    return reply;
};