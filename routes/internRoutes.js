import express from 'express';
import InternController from '../controllers/InternController.js';
import { validateName } from '../middleware/internMiddleware.js';

const router = express.Router();

router.post('/intern', validateName, InternController.create);
router.get('/intern', InternController.getAll);
router.get('/intern/:id', InternController.getById);
router.put('/intern/:id', validateName, InternController.update);
router.delete('/intern/:id', InternController.delete);

export default router;