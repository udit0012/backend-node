import { Model, DataTypes } from "sequelize";
import Faculty from "./faculty";
import sequelize from "./indexModel";

class Research extends Model{
    declare ResearchId:number;
    declare FacultyRef:number;
}

Research.init({
    ResearchId: {
      type: DataTypes.NUMBER,
      autoIncrement: true
    },
    FacultyRef: {
      type: DataTypes.NUMBER,
      references:{
        model:'Faculty',
        key:'FacultyId'
      }
    }
  }, {
    sequelize,
    modelName: 'Research'
  });

Research.belongsTo(Faculty,{foreignKey:'FacultyId',foreignKeyConstraint:true});

(async()=>{
    await Research.sync({force:true});
})
console.log("The table for the Research model was just (re)created!");

export default Research

