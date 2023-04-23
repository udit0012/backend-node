import express from 'express';
import { addItem, deleteItem, getAllItems } from '../controllers/Inventory/inventory';

const router = express.Router();
router.post('/add', addItem)
router.get('/get', getAllItems)
router.delete('/delete', deleteItem)
// router.post('/logout', logout)
// router.post('/refresh', refresh)

export default router
