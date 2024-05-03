import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { decodedUser, AuthRequest } from '../utils/types';

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(';')[0].split('=')[1];
            const decoded = jwt.verify(token, config.jwtSecret as string) as decodedUser;
            req.user = decoded;
            next();
        } else {
            throw new Error('No token provided');
        }
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
