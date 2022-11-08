import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from './../../connection/database';

interface UserAttributes {
    id: number;
    email: string;
    status: string;
    country_code: string;

    created_at?: Date;
    updated_at?: Date;
}

interface UserReportAttributes {
    id: number;
    email: string;
    created_at: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }

export interface UserOutput extends Required<UserAttributes> { }

export interface UserReportOutput extends Required<UserReportAttributes> { }

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number;
    public email!: string;
    public status!: string;
    public country_code!: string;

    // timestamps!
    public created_at!: Date;
    public updated_at!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        
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
}, {
    sequelize: sequelizeConnection,
    timestamps: false,
    tableName: "users"
})

export default User