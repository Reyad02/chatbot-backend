import { Router } from 'express';
import { chatController } from './chat.controller';

const chatRouter = Router();

chatRouter.post('/', chatController.createChat);
chatRouter.delete('/:uniqueIdentifier', chatController.deleteChat);
chatRouter.put('/:uniqueIdentifier', chatController.updateChat);
chatRouter.get('/history/:uniqueIdentifier', chatController.getSingleChat);
chatRouter.get('/history', chatController.getAllChat);

export default chatRouter;
