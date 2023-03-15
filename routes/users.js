import express from 'express';
import { createAccount, getUsers } from '../controllets/users.js';

const router = express.Router();
router.post('/create',createAccount);
router.get('/', getUsers)

export default router;
