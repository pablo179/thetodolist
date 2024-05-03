import { Response } from 'express';
import todoSchema from '../models/todo.model';
import { AuthRequest } from '../utils/types';

export const getTodos = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;
    const todos = await todoSchema.find({ userId });
    res.json(todos);
};

export const createTodo = async (req: AuthRequest, res: Response) => {
    const { title, description } = req.body;
    const userId = req.user?.id;
    const newTodo = new todoSchema({ title, description, userId });
    await newTodo.save();
    res.json(newTodo);
};

export const updateTodo = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const updatedTodo = await todoSchema.findByIdAndUpdate(id, { title, description, status }, { new: true });
    res.json(updatedTodo);
};
