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
    researchId: {
      type: DataTypes.NUMBER,
      autoIncrement: true
    },
    // FacultyRef: {
    //   type: DataTypes.NUMBER,
    //   references:{
    //     model:'Faculty',
    //     key:'FacultyId'
    //   }
    // },
    topic:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    subTopic:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    publishedID:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    publishedDate:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    publisherName:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    researchLink:{
      type:DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Research'
  });

Research.belongsTo(Faculty,{foreignKey:'FacultyId',foreignKeyConstraint:true});

Research.sync({force:true});
console.log("The table for the Research model was just (re)created!");

export default Research

