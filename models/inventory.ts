import {
    Sequelize,
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional
} from "sequelize";

// import InventoryRemarks from "./inventoryRemarks";

import sequelize from "./indexModel"

class Inventory extends Model<InferAttributes<Inventory>, InferCreationAttributes<Inventory>> {
    declare name: string;
    declare brand: string;
    declare quantity: number;
    declare costPerItem: CreationOptional<number>;
    // declare damagedCreationOptional<string>;
    declare price: CreationOptional<number>;
    // declare remark: CreationOptional<string>;
    declare category: CreationOptional<string>;
    // declare inventoryId: CreationOptional<number>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}
Inventory.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // remark: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // costPerItem: {
        //     type: DataTypes.NUMBER,
        //     allowNull: true,
        // },
        price: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        costPerItem: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        quantity: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        // damaged: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // }
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: "Inventory",
    }
);

// Inventory.hasMany(InventoryRemarks)

Inventory.sync();
console.log("The table for the Inventory model was just (re)created!");

export default Inventory;

//username
//email
//password
//phone
//type
//studentRef
//FacultyRef
//updated_at
//created_at
//access_token
//refresh_token
