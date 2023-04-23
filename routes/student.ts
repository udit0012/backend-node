import express from 'express';
import { getStudent, updateStudent } from '../controllers/Student/student';

const router = express.Router();
router.get('/get', getStudent);
router.patch('/update', updateStudent);

export default router
