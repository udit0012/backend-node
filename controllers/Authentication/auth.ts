import { Request, Response, CookieOptions } from "express";
import User from "../../models/user";
import { hashSync, genSaltSync, compareSync, compare } from "bcrypt";
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
        let hashedPassword = hashSync(password, 10);
        user = await User.create({
            email:email, 
            password:hashedPassword,
        })
        const data = {
            user:user
        }
        const jsontoken = jsonwebtoken.sign(data, process.env.SECRET_KEY || "supersecret", { expiresIn: '30m' });
        const cookieOptions: CookieOptions = { httpOnly: true, secure: true, sameSite: 'strict', expires: new Date(Number(new Date()) + 30 * 60 * 1000) } //we add secure: true, when using https.
        res.cookie('token', jsontoken, cookieOptions);
        res.status(200)
        res.json({ token: jsontoken, email: email });
    } catch (e) {
        res.status(400).json({error:"Internal Server Error"})
        console.log(e)
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const email = req.body.email
        let password = req.body.password

        let user = await User.findOne({
            where: {
                email: email
            }
        })
        if (!user) {
            res.status(400).json({ "error": "User not found" })
            return
        }
        let passCompare = await compare(password, user.password);
        if(!passCompare){
            return res.status(400).json({error:"Password Incorrect"})
        }
        const data = {
            user:user
        }
        const jsontoken = jsonwebtoken.sign(data, process.env.SECRET_KEY || "supersecret", { expiresIn: '30m' });
        const cookieOptions: CookieOptions = { httpOnly: true, secure: true, sameSite: 'strict', expires: new Date(Number(new Date()) + 30 * 60 * 1000) } //we add secure: true, when using https.
        res.cookie('token', jsontoken, cookieOptions);
        res.status(200)
        res.json({ token: jsontoken, email: email });

    } catch (error) {
        res.status(400).json({error:"Internal Server Error"})
        console.log(error); 
    }
    
}


export const logout = async(req:Request,res:Response)=>{
        return res
          .clearCookie("token")
          .status(200)
          .json({ message: "Successfully logged out" });
}
export const refresh = async(req:Request,res:Response)=>{
    // token refresh code
    
    // return res
    //   .clearCookie("token")
    //   .status(200)
    //   .json({ message: "Successfully logged out" });
}