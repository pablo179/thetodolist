import express from 'express';
import { Router } from 'express';
import authRoutes from './auth.routes';
import config from '../config';

const router = express.Router();
type Route = {
    path: string;
    route: Router;
};
const appRoutes: Route[] = [
    {
        path: '/auth',
        route: authRoutes,
    },
];

const devRoutes: Route[] = [];

appRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

if (config.env === 'dev') {
    devRoutes.forEach((route) => {
        router.use(route.path, route.route);
    });
}

export default router;
