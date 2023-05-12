import express from "express"
import { getAllLeaves, applyLeave, getFacultyLeaves, getLeavesByDept } from "../controllers/FacultyLeave/facultyLeave"

const router = express.Router()

router.post("/apply", applyLeave)
router.get("/getAllLeaves", getAllLeaves)
router.get("/getFacultyLeaves/:facultyId", getFacultyLeaves)
router.get("/getLeavesByDept/:dept", getLeavesByDept)

export default router
