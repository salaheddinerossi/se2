import express from 'express';

import {getPresance , createPresance} from '../controllets/Presance.js';

const router = express.Router();
router.get('/', getPresance);
router.post('/create', createPresance);

export default router;
