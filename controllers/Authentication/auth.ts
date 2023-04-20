import { Request, Response, CookieOptions } from "express";
import User from "../../models/user";
import { hashSync, genSaltSync, compareSync } from "bcrypt";
import jsonwebtoken from 'jsonwebtoken'
export const register = async (req: Request, res: Response) => {

    const email: string = req.body.email
    let password: string = req.body.password

    let user = await User.findOne({
        where: {
            email: email
        }
    })

    if (user) {
        res.status(409).json({ "error": "User already registered" })
        return
    }
    try {
        const salt = genSaltSync(10)
        let hashedPassword = hashSync(password, salt);
        user = await User.create({
            email: email,
            password: hashedPassword,
        })
        const jsontoken = jsonwebtoken.sign({ user: user }, process.env.SECRET_KEY || "supersecret", { expiresIn: '30m' });
        const cookieOptions: CookieOptions = { httpOnly: true, secure: true, sameSite: 'strict', expires: new Date(Number(new Date()) + 30 * 60 * 1000) } //we add secure: true, when using https.
        res.cookie('token', jsontoken, cookieOptions);
        res.status(200)
        res.json({ token: jsontoken, email: email });
    } catch (e) {
        res.status(400).json({ error: "Internal Server Error" })
        console.log(e)
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const email: string = req.body.email
        let password: string = req.body.password

        let user: User | null = await User.findOne({
            where: {
                email: email
            }
        })
        if (!user) {
            res.status(400).json({ "error": "User not found" })
            return
        }
        let isValidPassword: boolean = compareSync(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ error: "Invalid credentials" })
        }
        user.password = ""

        const jsontoken = jsonwebtoken.sign({ user: user }, process.env.SECRET_KEY || "supersecret", { expiresIn: '30m' });
        const cookieOptions: CookieOptions = { httpOnly: true, secure: true, sameSite: 'strict', expires: new Date(Number(new Date()) + 30 * 60 * 1000) } //we add secure: true, when using https.
        res.cookie('token', jsontoken, cookieOptions);
        res.status(200)
        res.json({ token: jsontoken, email: email });

    } catch (error) {
        res.status(400).json({ error: "Internal Server Error" })
        console.log(error);
    }

}


export const logout = async (req: Request, res: Response) => {
    return res
        .clearCookie("token")
        .status(200)
        .json({ message: "Successfully logged out" });
}
export const refresh = async (req: Request, res: Response) => {
    // token refresh code

    // return res
    //   .clearCookie("token")
    //   .status(200)
    //   .json({ message: "Successfully logged out" });
}
