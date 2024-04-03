import express, { Request, Response, NextFunction } from 'express';
import routes from './routes/index';
import ApiError from './utils/ApiError';
import status from 'http-status';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use((_req: Request, _res: Response, next: NextFunction) => {
    next(new ApiError(status.NOT_FOUND, 'Not Found'));
});

export default app;
