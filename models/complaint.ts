import { Model, DataTypes, CreationOptional } from "sequelize";
import sequelize from "./indexModel";

class Complaint extends Model {
  declare id: CreationOptional<string>;
  declare complainant: number;
  declare complainee: number;
  declare level: number;
  declare status: string;
  declare description: string;
  declare punishment: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Complaint.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    complainant: {
      type: DataTypes.INTEGER,
      references: {
        model: "Students",
        key: "studentId",
      }
    },
    complainee: {
      type: DataTypes.INTEGER,
      references: {
        model: "Students",
        key: "studentId",
      }
    }
  },
  { sequelize }
);

export default Complaint
