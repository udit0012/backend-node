import express from 'express';
import { addResearch, getFacultyResearch, getAllResearch,searchResearch } from '../controllers/FacultyResearch/facultyResearch';

const router = express.Router();
router.post('/addResearch', addResearch)
router.get('/getFacultyResearch/:facultyId', getFacultyResearch)
// router.get('/getAllResearch', getAllResearch)
// router.post('/searchResearch', searchResearch)

export default router
