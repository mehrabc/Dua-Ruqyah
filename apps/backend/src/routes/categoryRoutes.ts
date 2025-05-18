import { Router } from 'express';
import { getCategoriesHandler } from '../controllers/categoryController';

const router = Router();
router.get('/', getCategoriesHandler);

export default router;
