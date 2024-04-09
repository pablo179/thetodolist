import { Request, Response } from 'express';
import userSchema from '../models/user.model';
import ApiError from '../utils/ApiError';
import status from 'http-status';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import { serialize } from 'cookie';

const findUser = async (email: string) => await userSchema.findOne({ email });

const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const generateToken = (id: string, email: string, empty = false) => {
    const token = jwt.sign(
        {
            email,
            id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        config.jwtSecret as string,
    );
    if (!token) {
        throw new ApiError(status.INTERNAL_SERVER_ERROR, 'Token could not be generated');
    }
    const serializedToken = serialize('token', empty ? '' : token, {
        httpOnly: true,
        secure: config.env === 'prod',
        sameSite: 'strict',
        path: '/',
        maxAge: empty ? 0 : 60 * 60,
    });
    return serializedToken;
};

export const register = async (req: Request, res: Response) => {
    const { email, password, username } = req.body;
    const userExists = await findUser(email);
    if (userExists) {
        throw new ApiError(status.BAD_REQUEST, 'Signup failed: email already exists');
    }
    const hashedPassword = await encryptPassword(password);
    const newUser = new userSchema({
        email,
        password: hashedPassword,
        username,
    });
    const userCreated = await newUser.save();
    const token = generateToken(userCreated._id, userCreated.email);
    res.setHeader('Set-Cookie', token);
    res.json('User created');
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await findUser(email);
    const loginError = 'Login failed: email or password is incorrect';
    if (!user) {
        throw new ApiError(status.BAD_REQUEST, loginError);
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        throw new ApiError(status.BAD_REQUEST, loginError);
    }
    const token = generateToken(user._id, user.email);
    res.setHeader('Set-Cookie', token);
    res.json('Logged in');
};

export const logout = async (_req: Request, res: Response) => {
    const token = generateToken('', '', true);
    res.setHeader('Set-Cookie', token);
    res.json('Logged out');
};
