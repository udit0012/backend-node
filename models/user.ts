import { Sequelize, Model, DataTypes } from 'sequelize';
import Research from './research';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});
const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
});
(async()=>{
    await Research.sync({force:true})
})
console.log("The table for the User model was just (re)created!");

export default User


//username
//email
//password
//phone
//type
//studentRef
//FacultyRef
//updated_at
//created_at
//access_token
//refresh_token