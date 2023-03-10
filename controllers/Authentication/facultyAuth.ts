import { Request, Response, CookieOptions } from "express";
import Faculty from "../../models/faculty"
import { hashSync, genSaltSync, compareSync, compare } from "bcrypt";
import jsonwebtoken from 'jsonwebtoken'
export const facultyRegister = async (req: Request, res: Response) => {

    let username: string= req.body.username
    const email: string = req.body.email
    let password: string = req.body.password
    let phoneNo: number = req.body.phoneNo
    let department: string = req.body.department
    let designation: string = req.body.designation

    let user = await Faculty.findOne({
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
        user = await Faculty.create({
            username:username, 
            email:email, 
            password:hashedPassword,
            phoneNo:phoneNo,
            department:department,
            designation:designation 
        })
        const jsontoken = jsonwebtoken.sign({ user: user }, process.env.SECRET_KEY || "supersecret", { expiresIn: '30m' });
        const cookieOptions: CookieOptions = { httpOnly: true, secure: true, sameSite: 'strict', expires: new Date(Number(new Date()) + 30 * 60 * 1000) } //we add secure: true, when using https.
        res.cookie('token', jsontoken, cookieOptions);
        res.status(200)
        res.json({ token: jsontoken, email: email });
    } catch (e) {
        res.status(400).json({error:"Internal Server Error"})
        console.log(e)
    }
}

export const facultyLogin = async (req: Request, res: Response) => {
    try {
        const email = req.body.email
        let password = req.body.password

        let user = await Faculty.findOne({
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

        const jsontoken = jsonwebtoken.sign({ user: user }, process.env.SECRET_KEY || "supersecret", { expiresIn: '30m' });
        const cookieOptions: CookieOptions = { httpOnly: true, secure: true, sameSite: 'strict', expires: new Date(Number(new Date()) + 30 * 60 * 1000) } //we add secure: true, when using https.
        res.cookie('token', jsontoken, cookieOptions);
        res.status(200)
        res.json({ token: jsontoken, email: email });

    } catch (error) {
        res.status(400).json({error:"Internal Server Error"})
        console.log(error); 
    }
    
}
