import { Request, Response } from 'express';
import { ChatValidation } from './chat.validation';
import { chatServices } from './chat.service';

const createChat = async (req: Request, res: Response) => {
  try {
    const parseMsgContent = ChatValidation.chatSchema.parse(req.body.messagesFullContent)
    const result = await chatServices.createChat(parseMsgContent);
    res.json({
      message: 'Messages created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteChat = async (req: Request, res: Response) => {
  try {
    const result = await chatServices.deleteChat(
      req.body.messagesFullContent?.uniqueIdentifier,
    );
    res.json({
      message: 'Messages deleted successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateChat = async (req: Request, res: Response) => {
  try {
    const result = await chatServices.updateChat(req.body.messagesFullContent);
    res.json({
      message: 'Messages updated successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleChat = async (req: Request, res: Response) => {
  try {
    const result = await chatServices.getSingleChat(
      req.params?.uniqueIdentifier,
    );
    res.json({
      message: 'Message get successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllChat = async (req: Request, res: Response) => {
  try {
    const result = await chatServices.getAllChat();
    res.json({
      message: 'Messages get successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const chatController = {
  createChat,
  deleteChat,
  updateChat,
  getSingleChat,
  getAllChat
};
