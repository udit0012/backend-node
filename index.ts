import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authFacultyRouter from "./routes/facultyResearch"
import authUserRouter from "./routes/auth"
import dotenv from "dotenv"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/user', authUserRouter)
app.use('/faculty', authFacultyRouter)

app.listen(PORT, () => {
    console.log(`server is listening  on ${PORT}`);
});
