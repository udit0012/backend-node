import { Request, Response, CookieOptions } from "express";
import Faculty from "../../models/faculty"
import { hashSync, genSaltSync, compareSync, compare } from "bcrypt";
import jsonwebtoken from 'jsonwebtoken'

export const studentRegister = async (req: Request, res: Response) => {
    // student register
    try {
        
    } catch (e) {
        res.status(400).json({error:"Internal Server Error"})
        console.log(e)
    }
}

export const studentLogin = async (req: Request, res: Response) => {
    //student login
    try {
        
    } catch (e) {
        res.status(400).json({error:"Internal Server Error"})
        console.log(e)
    }
}