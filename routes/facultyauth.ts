import express from 'express';
import { facultyRegister, facultyLogin } from '../controllers/Authentication/facultyAuth.js';
import { logout,refresh } from '../controllers/Authentication/auth.js';

const router = express.Router();
router.post('/register', facultyRegister)
router.post('/login', facultyLogin)
router.post('/logout', logout)
router.post('/refresh', refresh)

export default router
