import { Model, DataTypes, NonAttribute } from 'sequelize';

import Research from './research';
import sequelize from './indexModel';

class Faculty extends Model{
    declare username:string;
    declare FacultyId:number;
    declare email:string;
    declare password:string;
    declare phoneNo:number;
    declare department:string;
    declare designation:string;
}
Faculty.init({
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    FacultyId:{
        type: DataTypes.NUMBER,
        unique: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        // unique: true, //password can't be unique 
        allowNull: false
    },
    phoneNo:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    department:{
        type:DataTypes.STRING,
        allowNull:false
    },
    designation:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize,
    modelName:'Faculty'
});

Faculty.hasMany(Research);

(async()=>{
    await Faculty.sync({force:true});
})
console.log("The table for the Faculty model was just (re)created!");

export default Faculty


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