"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_js_1 = __importDefault(require("./routes/auth.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use(body_parser_1.default.json());
auth_js_1.default.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use('/user', auth_js_1.default);
app.listen(PORT, () => {
    console.log(`server is listening  on ${PORT}`);
});
