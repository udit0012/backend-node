import express from "express";
import { getFaculty } from "../controllers/Faculty/faculty";

const router = express.Router();

router.get("/getFaculty/:facultyId", getFaculty);

export default router
