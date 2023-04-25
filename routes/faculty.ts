import express from "express";
import { addFacultyDetails, getFaculty } from "../controllers/Faculty/faculty";
import authentication from "../middleware/authentication";

const router = express.Router();

router.post("/addFaculty",authentication,addFacultyDetails)
router.get("/getFaculty/:facultyId",authentication, getFaculty);

export default router
