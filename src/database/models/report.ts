import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from './../../connection/database';

interface ReportAttributes {
    id: number;
    short_title: string;
    title: string;
    status: string;
    paramaters: string;
    sql_string: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface ReportInput extends Optional<ReportAttributes, 'id'> { }

export interface ReportOutput extends Required<ReportAttributes> { }

class Report extends Model<ReportAttributes, ReportInput> implements ReportAttributes {
    public id!: number;
    public short_title!: string;
    public title!: string;
    public status!: string;
    public paramaters!: string;
    public sql_string!: string;

    // timestamps!
    public created_at!: Date;
    public updated_at!: Date;
}

Report.init({
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
}, {
    sequelize: sequelizeConnection,
    timestamps: false,
    tableName: "reports",
})

export default Report
