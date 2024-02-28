// api.routes.js

import express from 'express';
import { getAll, getOne, insertOne, updateOne, deleteOne } from '../controller/api.controller.js';

const router = express.Router();

router.get('/', getAll);
router.get('/edit/:id', getOne);
router.put('/', insertOne);
router.put('/edit/:id', updateOne);
router.get('/delete/:id', deleteOne);  // Cambié el método a GET para el enlace de eliminación

export default router;
