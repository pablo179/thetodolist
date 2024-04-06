import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { tryCatchWrapper } from '../utils';

const router: Router = Router();

router.post('/signup', tryCatchWrapper(register));

router.post('/login', tryCatchWrapper(login));

export default router;
