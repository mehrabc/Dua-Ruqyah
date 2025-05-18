import { Router } from 'express';
import { getDuasHandler } from '../controllers/duaController';

const router = Router();
router.get('/', getDuasHandler);
export default router;
