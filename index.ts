import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authFacultyRouter from "./routes/facultyauth"
import authStudentRouter from "./routes/studentauth"
import dotenv from "dotenv"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/faculty', authFacultyRouter)
app.use('/student', authStudentRouter)

app.listen(PORT, () => {
    console.log(`server is listening  on ${PORT}`);
});
