import mongoose from 'mongoose';
import config from './config';

export const connectDB = async () => {
    try {
        await mongoose.connect(config.dbURL || '');
        console.info('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
};
