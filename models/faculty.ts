import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from "sequelize";

import sequelize from "./indexModel";
import User from "../models/user"

class Faculty extends Model<InferAttributes<Faculty>, InferCreationAttributes<Faculty>> {
  declare id: string;
  declare department: string;
  declare designation: string;
  declare qualification: string;
  declare userId: ForeignKey<User["id"]>;
}

// import Student from "./student"
// Faculty.hasMany(Student, {
//   foreignKey: "facultyId"
// })

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
