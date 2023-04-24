import { Model, DataTypes } from "sequelize";

import sequelize from "./indexModel";

class StudentLeave extends Model {
  declare startDate: Date;
  declare endDate: Date;
  declare workingDays: number;
  declare reason: string;
  declare placeOfStay: string;
  declare fileDocument: JSON;
  declare advisorCode: string;
  declare advisorApproval: boolean;
  declare wardenApproval: boolean;
}
StudentLeave.init(
  {
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    workingDays: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    reason: {
      type: DataTypes.TEXT,
    },
    placeOfStay: {
      type: DataTypes.TEXT,
    },
    fileDocument: {
      // type: DataTypes.BLOB('long'),
      type: DataTypes.JSON,
      allowNull: true,
    },
    advisorCode: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Faculties",
        key: "facultyId",
      },
    },
    // status: {
    //     type: DataTypes.INTEGER,
    //     defaultValue: 0
    //     //  0 -> pending
    //     //  1 -> advisor approved
    //     //  2 -> warden approved
    //     // -1 -> rejected
    // },
    advisorApproval: {
      type: DataTypes.BOOLEAN,
      defaultValue: null,
    },
    wardenApproval: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    modelName: "StudentLeave",
  }
);

export default StudentLeave;
