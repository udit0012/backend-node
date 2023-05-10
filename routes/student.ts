import express from 'express';
import { getStudent, updateStudent, getAdvisees, getStudentsByBatch } from '../controllers/Student/student';

const router = express.Router();
router.get('/get/:studentId', getStudent);
router.patch('/update', updateStudent);
router.get('/getAdvisees/:advisorCode', getAdvisees)
router.get("/getByBatch/:year", getStudentsByBatch)

export default router
