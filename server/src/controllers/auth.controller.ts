import { Request, Response } from 'express';
import userSchema from "../models/user.model";
export const register = async (req: Request, res: Response) => {
    const { email, password, username } = req.body;
    try {
        const newUser = new userSchema({
            email,
            password,
            username,
        });
        const userCreated = await newUser.save();
        res.json(userCreated);
    } catch (error) {
        if (error instanceof Error) {
             res.status(409).send(error.message);
         }
    }
}