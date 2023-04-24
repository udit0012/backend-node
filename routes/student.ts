import express from 'express';
import { getStudent, updateStudent, getAdvisees } from '../controllers/Student/student';

const router = express.Router();
router.get('/get/:studentId', getStudent);
router.patch('/update', updateStudent);
router.get('/getAdvisees/:advisorCode', getAdvisees)

export default router
