import {
    Sequelize,
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional
} from "sequelize";

import InventoryRemarks from "./inventoryRemarks";

const sequelize: Sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
});

class Inventory extends Model<InferAttributes<Inventory>, InferCreationAttributes<Inventory>> {
    declare name: string;
    declare quantity: number;
    declare damaged: string;
    declare inventoryId: number;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}
Inventory.init(
    {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        inventoryId: {
            type: DataTypes.NUMBER,
            unique: true,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.NUMBER,
            unique: true,
            allowNull: false,
        },
        damaged: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: "Inventory",
    }
);

Inventory.hasMany(InventoryRemarks)

Inventory.sync();
console.log("The table for the User model was just (re)created!");

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
