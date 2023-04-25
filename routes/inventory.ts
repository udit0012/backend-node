import express from 'express';
import { addItem, deleteItem, getAllItems, getItem } from '../controllers/Inventory/inventory';

const router = express.Router();
router.post('/add', addItem)
router.get('/getAll', getAllItems)
router.get('/get/:itemId', getItem)
router.delete('/delete', deleteItem)
// router.post('/logout', logout)
// router.post('/refresh', refresh)

export default router
