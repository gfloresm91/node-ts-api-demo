import { DataTypes } from 'sequelize';
import db from '../db/connection.db';

const User = db.define('Usuario', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    }
});

export default User;