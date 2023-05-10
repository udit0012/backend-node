import express from "express";
import { getComplaint, getComplaintsByLvl, addComplaint, forwardComplaint } from "../controllers/CDB/cdb"

const router = express.Router();

router.get("/get/:id", getComplaint)
router.get("/getByLevel/:level", getComplaintsByLvl)
router.post("/add", addComplaint)
router.patch("/forward", forwardComplaint)

export default router
