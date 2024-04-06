import ApiError from './ApiError';
import { Request, Response } from 'express';

interface CustomError extends Error {
    statusCode?: number;
}

const errorConverter = (err: CustomError | ApiError): ApiError => {
    if (!(err instanceof ApiError)) {
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Something went wrong';
        err = new ApiError(statusCode, message);
    }
    return err as ApiError;
};

//expecting a function that takes a request and response object
const tryCatchWrapper = (action: (_req: Request, _res: Response) => Promise<void>) => {
    return async (req: Request, res: Response) => {
        try {
            await action(req, res);
        } catch (error) {
            if (error instanceof ApiError) {
                return res.status(error.statusCode).json({ error: error.message });
            } else {
                const convertedError = errorConverter(error as CustomError);
                return res.status(convertedError.statusCode).json({ error: convertedError.message });
            }
        }
    };
};

export default tryCatchWrapper;
