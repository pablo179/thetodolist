import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

const getEnvVar = (name: string, required = true): string | undefined => {
    const value = process.env[name];
    if (value === undefined && required) {
        throw new Error(`Environment variable ${name} not set`);
    }
    return value;
};

export default {
    port: getEnvVar('PORT'),
    dbURL: getEnvVar('DB_URL'),
    env: 'dev',
};
