import { Model, DataTypes } from "sequelize";
import Faculty from "./faculty";
import sequelize from "./indexModel";

class Research extends Model{
    declare ResearchId:number;
    declare FacultyRef:number;
    declare Topic:string;
    declare SubTopic:string;
    declare PublishedID:string;
    declare PublishedDate:string;
    declare PublisherName:string;
    declare ResearchLink:string;
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
    },
    Topic:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    SubTopic:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    PublishedID:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    PublishedDate:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    PublisherName:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    ResearchLink:{
      type:DataTypes.STRING,
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

