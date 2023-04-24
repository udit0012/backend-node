import { Model, DataTypes } from "sequelize";

import sequelize from "./indexModel";

class FacultyLeave extends Model {
  declare startDate: Date;
  declare endDate: Date;
  declare reason: string;
  declare type: string;
  declare remarks: string;
  declare status: number;
  declare toCount: boolean;
  declare fileDocument: JSON;
}
FacultyLeave.init(
  {
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
    },
    remarks: {
      type: DataTypes.TEXT,
    },
    fileDocument: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      //  0 -> pending
      //  1 -> advisor approved
      //  2 -> warden approved
      // -1 -> rejected
    },
    toCount: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize }
);

export default FacultyLeave;
