import express from 'express';
import { createSubject, updateSubject, deleteSubject } from '../controllets/Subject.js';

const router = express.Router();

router.post('/create', createSubject);
router.patch('/update/:id', updateSubject);
router.delete('/delete/:id', deleteSubject);

export default router;
