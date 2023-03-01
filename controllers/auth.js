// import User from "../models/user"
const User = require("../models/user")
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const jsonwebtoken = require('jsonwebtoken')
export const register = async (req, res) => {

    const email = req.body.email
    let password = req.body.password

    if (!email) {
        res.status(400).json({ "error": "Email can not be empty" })
    }

    if (!password) {
        res.status(400).json({ "error": "Password can not be empty" })
    }

    let user = User.findAll({
        where: {
            email: email
        }
    })

    if (user) {
        res.status(409).json({ "error": "Email already registered" })
    }
    try {
        const salt = genSaltSync(10);
        password = hashSync(password, salt);

        user = await User.create({ email: email, password: password })
        const jsontoken = jsonwebtoken.sign({ user: user }, process.env.SECRET_KEY, { expiresIn: '30m' });
        res.cookie('token', jsontoken, { httpOnly: true, secure: true, SameSite: 'strict', expires: new Date(Number(new Date()) + 30 * 60 * 1000) }); //we add secure: true, when using https.


        res.json({ token: jsontoken, email: email });
    } catch (e) {
        console.log(e)
    }

}


// module.exports

