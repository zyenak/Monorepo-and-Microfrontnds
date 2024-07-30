import { Router } from 'express';
import * as authController from '../controllers/userController';

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;
