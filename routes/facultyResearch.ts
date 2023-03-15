import express from 'express';
import { addResearch, getAllResearch,searchResearch } from '../controllers/FacultyResearch/facultyResearch';

const router = express.Router();
router.post('/addResearch', addResearch)
router.post('/getAllResearch', getAllResearch)
router.post('/searchResearch', searchResearch)

export default router
