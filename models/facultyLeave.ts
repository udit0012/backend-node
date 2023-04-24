import { Model, DataTypes } from 'sequelize';

import sequelize from './indexModel';

class FacultyLeave extends Model{
    declare studentId:number;
    declare start_date: Date;
    declare end_date: Date;
    declare working_days: number;
    declare reason: string;
    declare placeOfStay: string;
}
FacultyLeave.init({
    facultyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reason: {
        type: DataTypes.TEXT
    },
    remarks: {
        type: DataTypes.TEXT
    },
    fileDocument: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0
        //  0 -> pending
        //  1 -> advisor approved
        //  2 -> warden approved
        // -1 -> rejected
    },
    toCount: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},  {
        sequelize,
        modelName: "FacultyLeave"
    });

export default FacultyLeave;
