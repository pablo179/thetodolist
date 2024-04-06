import { Router } from 'express';
import { register, login, logout } from '../controllers/auth.controller';
import { tryCatchWrapper } from '../utils';

const router: Router = Router();

router.post('/signup', tryCatchWrapper(register));

router.post('/login', tryCatchWrapper(login));

router.get('/logout', tryCatchWrapper(logout));

export default router;
