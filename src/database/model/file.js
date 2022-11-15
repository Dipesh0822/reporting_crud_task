const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
    const file = sequelize.define('files', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        group: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sub_group: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filename: {
            type: DataTypes.STRING
        },
        url_to_aws: {
            type: DataTypes.STRING,
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
    }, { tableName: 'files', timestamps: false });
    return file;
};