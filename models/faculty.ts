import { Model, DataTypes, NonAttribute } from 'sequelize';

import Research from './research';
import sequelize from './indexModel';
import User from './user';

class Faculty extends Model{
    declare username:string;
    declare FacultyId:number;
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

Faculty.belongsTo(User,{foreignKey:'email',foreignKeyConstraint:true})
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