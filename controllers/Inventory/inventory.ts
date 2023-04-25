import { Request, Response, CookieOptions } from "express";
import Inventory from "../../models/inventory";
import { hashSync, genSaltSync, compareSync } from "bcrypt";
import jsonwebtoken from 'jsonwebtoken'

export const addItem = async (req: Request, res: Response) => {
    try {
        const { name, brand, quantity, costPerItem, category } = req.body
        if (!name || !brand || !quantity || !costPerItem || !category) {
            return res.status(200).json({
                status: "fail",
                data: null,
                error: "One or more mandatory field is issing"
            })
        }
        const oldItem = await Inventory.findOne({ where: { name, brand } })
        if (oldItem) {
            return res.status(200).json({
                status: "fail",
                data: null,
                error: "Item with this name and brand already exist"
            })
        }
        let item = await Inventory.create({
            name, brand, quantity, costPerItem, category, price: quantity * costPerItem
        })
        return res.status(200).json({
            status: "pass",
            data: item,
            error: null
        })
    } catch (e) {
        return res.status(409).json({
            status: "fail",
            data: null,
            error: e
        })
    }

}
export const getAllItems = async (req: Request, res: Response) => {
    try {
        let items = await Inventory.findAll()
        return res.status(200).json({
            status: "pass",
            data: items,
            error: null
        })
    } catch (e) {
        console.log(e)
        return res.status(409).json({
            status: "fail",
            data: null,
            error: e
        })
    }

}

export const getItem = async (req: Request, res: Response) => {
    try {
        const itemId = req.params.itemId
        const item = await Inventory.findOne({
            where: {
                id: itemId
            }
        })
        return res.status(200).json({
            status: "pass",
            data: item,
            error: null
        })
    } catch (e) {
        return res.status(409).json({
            status: "pass",
            data: null,
            error: e
        })
    }
}
export const deleteItem = async (req: Request, res: Response) => {
    try {
        const { name, brand } = req.body
        if (!name || !brand) {
            return res.status(200).json({
                status: "fail",
                data: null,
                error: "One or more mandatory field is missing"
            })
        }
        let items = await Inventory.destroy({
            where: {
                name, brand
            }
        })
        return res.status(200).json({
            status: "pass",
            data: items,
            error: null
        })
    } catch (e) {
        console.log(e)
        return res.status(409).json({
            status: "fail",
            data: null,
            error: e
        })
    }

}

