import { Request, Response } from 'express';
import userSchema from '../models/user.model';
import ApiError from '../utils/ApiError';
import status from 'http-status';

const findUser = async (email: string) => await userSchema.findOne({ email });

export const register = async (req: Request, res: Response) => {
    const { email, password, username } = req.body;
    const userExists = await findUser(email);
    if (userExists) {
        throw new ApiError(status.BAD_REQUEST, 'User already exists');
    }
    const newUser = new userSchema({
        email,
        password,
        username,
    });
    const userCreated = await newUser.save();
    res.json(userCreated);
};
