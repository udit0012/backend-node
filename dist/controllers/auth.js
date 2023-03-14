"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const user_js_1 = __importDefault(require("../models/user.js"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    let password = req.body.password;
    if (!email) {
        res.status(400).json({ "error": "Email can not be empty" });
    }
    if (!password) {
        res.status(400).json({ "error": "Password can not be empty" });
    }
    let user = yield user_js_1.default.findOne({
        where: {
            email: email
        }
    });
    if (user) {
        res.status(409).json({ "error": "Email already registered" });
        return;
    }
    try {
        password = (0, bcrypt_1.hashSync)(password, 10);
        user = yield user_js_1.default.create({ email: email, password: password });
        const jsontoken = jsonwebtoken_1.default.sign({ user: user }, process.env.SECRET_KEY || "supersecret", { expiresIn: '30m' });
        const cookieOptions = { httpOnly: true, secure: true, sameSite: 'strict', expires: new Date(Number(new Date()) + 30 * 60 * 1000) }; //we add secure: true, when using https.
        res.cookie('token', jsontoken, cookieOptions);
        res.status(200);
        res.json({ token: jsontoken, email: email });
    }
    catch (e) {
        console.log(e);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    let password = req.body.password;
    if (!email) {
        res.status(400).json({ "error": "Email can not be empty" });
    }
    if (!password) {
        res.status(400).json({ "error": "Password can not be empty" });
    }
    let user = yield user_js_1.default.findOne({
        where: {
            email: email
        }
    });
    if (!user) {
        res.status(400).json({ "error": "Invalid email or password" });
        return;
    }
    const isValidPassword = (0, bcrypt_1.compareSync)(password, user.password);
    if (isValidPassword) {
        user.password = "";
        const jsontoken = jsonwebtoken_1.default.sign({ user: user }, process.env.SECRET_KEY || "supersecret", { expiresIn: '30m' });
        const cookieOptions = { httpOnly: true, secure: true, sameSite: 'strict', expires: new Date(Number(new Date()) + 30 * 60 * 1000) }; //we add secure: true, when using https.
        res.cookie('token', jsontoken, cookieOptions);
        res.status(200);
        res.json({ token: jsontoken, email: email });
    }
    else {
        return res.json({ "error": "Invalid email or password" });
    }
});
exports.login = login;
