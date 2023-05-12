import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";

import sequelize from "./indexModel";

class Faculty extends Model<InferAttributes<Faculty>, InferCreationAttributes<Faculty>> {
  declare id: string;
  declare department: string;
  declare designation: string;
  declare qualification: string;
}

import Student from "./student"
Faculty.hasMany(Student, {
  foreignKey: "facultyId"
})

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
