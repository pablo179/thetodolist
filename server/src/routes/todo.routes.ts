import { Router } from 'express';
import { tryCatchWrapper } from '../utils';
import { getTodos, createTodo, updateTodo } from '../controllers/todo.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router: Router = Router();

router.get('/', authMiddleware, tryCatchWrapper(getTodos));
router.post('/', authMiddleware, tryCatchWrapper(createTodo));
router.put('/:id', authMiddleware, tryCatchWrapper(updateTodo));

export default router;
