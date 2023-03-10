import { Sequelize, Model, DataTypes } from 'sequelize';
import Research from './research';
import sequelize from './indexModel';

class User extends Model{
    declare email:string;
    declare password:string;
}
User.init({
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
},{
    sequelize,
    modelName:"User"
});

(async()=>{
    await User.sync({force:true})
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