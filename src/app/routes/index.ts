import { Router } from 'express';
import chatRouter from '../modules/chat/chat.route';

const router = Router();

const routes = [
  {
    path: '/chat',
    route: chatRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.route));
export default router;
