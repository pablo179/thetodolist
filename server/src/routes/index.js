import express from 'express';
import authRoutes from './auth.routes.js';
import config from '../config.js';

const router = express.Router();

const appRoutes = [
    {
        path: '/auth',
        route: authRoutes
    }
]

const devRoutes = [
]

appRoutes.forEach(route => {
    router.use(route.path, route.route);
})

if (config.env === 'dev') {
    devRoutes.forEach(route => {
        router.use(route.path, route.route);
    })
}

export default router;