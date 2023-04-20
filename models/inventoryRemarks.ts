// import {
//     Sequelize,
//     Model,
//     DataTypes,
//     InferAttributes,
//     InferCreationAttributes,
//     CreationOptional
// } from "sequelize";
// import Inventory from "./inventory";

// const sequelize: Sequelize = new Sequelize({
//     dialect: "sqlite",
//     storage: "./database.sqlite",
// });

// class InventoryPurchaseHistory extends Model<InferAttributes<InventoryRemarks>, InferCreationAttributes<InventoryRemarks>> {
//     declare remark: string;
//     declare status: string;
//     declare inventoryId: number;
//     declare createdAt: CreationOptional<Date>;
//     declare updatedAt: CreationOptional<Date>;
// }
// InventoryRemarks.init(
//     {
//         remark: {
//             type: DataTypes.STRING,
//             unique: true,
//             allowNull: false,
//         },
//         inventoryId: {
//             type: DataTypes.INTEGER,
//             unique: true,
//             allowNull: false,
//         },
//         status: {
//             type: DataTypes.STRING,
//             unique: true,
//             allowNull: false,
//         },
//         createdAt: DataTypes.DATE,
//         updatedAt: DataTypes.DATE,
//     },
//     {
//         sequelize,
//         tableName: "InventoryRemarks",
//     }
// );

// InventoryRemarks.belongsTo(Inventory, { foreignKey: 'inventoryId', foreignKeyConstraint: true });

// InventoryRemarks.sync();
// console.log("The table for the InventoryRemarks model was just (re)created!");

// export default InventoryRemarks;

// //username
// //email
// //password
// //phone
// //type
// //studentRef
// //FacultyRef
// //updated_at
// //created_at
// //access_token
// //refresh_token
