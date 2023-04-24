import { Model, DataTypes } from "sequelize";
import sequelize from "./indexModel";

class Research extends Model {
  declare topic: string;
  declare subTopic: string;
  declare publishedID: string;
  declare publishedDate: string;
  declare publisherName: string;
  declare researchLink: string;
}

Research.init(
  {
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subTopic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    publishedDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publisherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    researchLink: {
      type: DataTypes.STRING,
    },
  },
  { sequelize }
);

export default Research;
