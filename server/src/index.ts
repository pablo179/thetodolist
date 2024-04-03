import app from './app';
import config from './config';
import { connectDB } from './db';

const server = app.listen(config.port, () => {
    console.info(`Server is running on port ${config.port}`);
});

connectDB();

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error: Error) => {
    console.error(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
