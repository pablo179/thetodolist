import { Request } from 'express';

export type decodedUser = {
    email: string;
    id: string;
    exp: number;
    iat: number;
};

export type AuthRequest = Request & { user?: decodedUser };
