import express from 'express';
import { addResearch, getAllResearch,searchResearch } from '../controllers/FacultyResearch/facultyResearch';
import * as auth
const router = express.Router();
router.post('/addResearch', addResearch)
router.get('/getAllResearch', getAllResearch)
router.get('/searchResearch', searchResearch)

export default router
