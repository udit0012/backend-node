import { Model, DataTypes, ForeignKey } from "sequelize";
import sequelize from "./indexModel";
import Faculty from "./faculty"

class Student extends Model {
  declare id: number;
  declare degree: string;
  declare discipline: string;
  declare fatherName: string;
  declare motherName: string;
  declare parentPhone: string;
  declare parentEmail: string;
  declare hostel: string;
  declare roomNo: string;
  declare cgpa: number;
  declare batch: number;
  declare facultyId: ForeignKey<Faculty["id"]>;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    degree : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discipline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fatherName: {
      type: DataTypes.STRING,
    },
    motherName: {
      type: DataTypes.STRING,
    },
    parentPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roomNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cgpa: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    batch: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize }
);

export default Student;
