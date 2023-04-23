import { Model, DataTypes, NonAttribute } from 'sequelize';

import sequelize from './indexModel';
// import User from './user';
// import Student from './student';
// import Advisor from './advisor';

class StudentLeave extends Model{
    declare studentId:number;
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
StudentLeave.init({
    studentId: {
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
    workingDays: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    reason: {
        type: DataTypes.TEXT
    },
    placeOfStay: {
        type: DataTypes.TEXT
    },
    fileDocument: {
        // type: DataTypes.BLOB('long'),
        type: DataTypes.JSON,
        allowNull: true
    },
    advisorCode: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Faculty',
            key: 'FacultyId'
        }
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
        defaultValue:null
    },
    wardenApproval: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue:null
    },
},  {
        sequelize,
        modelName: "StudentLeave"
    });

// Leave.belongsTo(Student,{foreignKey:'collegeId',foreignKeyConstraint:true});
// Leave.belongsTo(Advisor,{foreignKey:'advisorcode',foreignKeyConstraint:true});
// Advisor.hasMany(Student);

StudentLeave.sync()
console.log("Leave table (re)created");

export default StudentLeave;
