import express from 'express';
import { studentRegister, studentLogin } from '../controllers/Authentication/studentAuth';
import {logout,refresh} from '../controllers/Authentication/auth'

const router = express.Router();
router.post('/register', studentRegister)
router.post('/login', studentLogin)
router.post('/logout', logout)
router.post('/refresh', refresh)

export default router