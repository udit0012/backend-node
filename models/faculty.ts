import { Model, DataTypes } from "sequelize";

import sequelize from "./indexModel";

class Faculty extends Model {
  declare facultyId: number;
  declare phoneNo: number;
  declare department: string;
  declare designation: string;
}
Faculty.init(
  {
    facultyId: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
    },
    phoneNo: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Faculty",
  }
);

export default Faculty;
