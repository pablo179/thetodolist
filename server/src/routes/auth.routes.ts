import { Router } from 'express';
import { register } from '../controllers/auth.controller';
import { tryCatchWrapper } from '../utils';

const router: Router = Router();

router.post('/signup', tryCatchWrapper(register));

export default router;
