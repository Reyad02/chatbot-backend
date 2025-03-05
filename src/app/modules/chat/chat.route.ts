import { Router } from 'express';
import { chatController } from './chat.controller';

const chatRouter = Router();

chatRouter.post('/', chatController.createChat);
chatRouter.delete('/:uniqueIdentifier', chatController.deleteChat);
chatRouter.put('/:uniqueIdentifier', chatController.updateChat);
chatRouter.get('/:uniqueIdentifier', chatController.getSingleChat);
chatRouter.get('/', chatController.getAllChat);

export default chatRouter;
