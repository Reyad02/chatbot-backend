import { Request, Response } from 'express';
import { ChatValidation } from './chat.validation';
import { chatServices } from './chat.service';

const createChat = async (req: Request, res: Response) => {
  try {
    // console.log(req.body.messagesFullContent.uniqueIdentifier);
    // const body = ChatValidation.chatSchema.parse(req.body.messagesFullContent);
    const result = await chatServices.createChat(req.body.messagesFullContent);
    res.json({
      message: 'Messages created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const chatController = {
  createChat,
};
