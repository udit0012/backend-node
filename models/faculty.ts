import { Model, DataTypes } from "sequelize";

import sequelize from "./indexModel";

class Faculty extends Model {
  declare facultyId: number;
  declare department: string;
  declare designation: string;
  declare qualification: string;
}
Faculty.init(
  {
    id: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

export default Faculty;
