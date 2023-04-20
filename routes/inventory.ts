import express from 'express';
import { addItem } from '../controllers/Inventory/inventory';

const router = express.Router();
router.post('/add', addItem)
// router.post('/logout', logout)
// router.post('/refresh', refresh)

export default router
