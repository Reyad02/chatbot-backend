import { Router } from 'express';
import { chatController } from './chat.controller';

const chatRouter = Router();

chatRouter.post('/', chatController.createChat);

export default chatRouter;
