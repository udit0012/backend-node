import express from 'express';
import { userRegister, userLogin } from '../controllers/Authentication/auth';

const router = express.Router();
router.post('/register', userRegister)
router.post('/login', userLogin)
// router.post('/logout', logout)
// router.post('/refresh', refresh)

export default router
