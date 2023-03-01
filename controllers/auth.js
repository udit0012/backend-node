import User from "../models/user.js"
import { hashSync, genSaltSync, compareSync } from "bcrypt";
import jsonwebtoken from 'jsonwebtoken'
export const register = async (req, res) => {

    const email = req.body.email
    let password = req.body.password

    if (!email) {
        res.status(400).json({ "error": "Email can not be empty" })
    }

    if (!password) {
        res.status(400).json({ "error": "Password can not be empty" })
    }

    let user = await User.findAll({
        where: {
            email: email
        }
    })

    if (user.length > 0) {
        res.status(409).json({ "error": "Email already registered" })
        return
    }
    try {
        const salt = genSaltSync(10);
        password = hashSync(password, salt);

        user = await User.create({ email: email, password: password })
        const jsontoken = jsonwebtoken.sign({ user: user }, process.env.SECRET_KEY || "supersecret", { expiresIn: '30m' });
        res.cookie('token', jsontoken, { httpOnly: true, secure: true, SameSite: 'strict', expires: new Date(Number(new Date()) + 30 * 60 * 1000) }); //we add secure: true, when using https.
        res.status(200)
        res.json({ token: jsontoken, email: email });
    } catch (e) {
        console.log(e)
    }
}

