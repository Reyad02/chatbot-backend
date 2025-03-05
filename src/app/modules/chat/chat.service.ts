import IChat from './chat.interface';
import Chat from './chat.model';

const createChat = async (messages: IChat) => {
  const isExistChat = await Chat.findOne({
    uniqueIdentifier: messages.uniqueIdentifier,
  });
  if (isExistChat) {
    const result = await Chat.updateOne(
      { uniqueIdentifier: messages.uniqueIdentifier },
      messages,
    );
    return result;
  } else {
    const result = await Chat.create(messages);
    return result;
  }
};

const deleteChat = async (uniqueIdentifier: string) => {
  const result = await Chat.deleteOne({ uniqueIdentifier: uniqueIdentifier });
  return result;
};

const updateChat = async (messages: IChat) => {
  const result = await Chat.updateOne(
    { uniqueIdentifier: messages.uniqueIdentifier },
    messages,
  );
  return result;
};

const getSingleChat = async (uniqueIdentifier: string) => {
  const result = await Chat.findOne({
    uniqueIdentifier: uniqueIdentifier,
  });
  return result;
};

const getAllChat = async () => {
  const result = await Chat.find({});
  return result;
};

export const chatServices = {
  createChat,
  deleteChat,
  updateChat,
  getAllChat,
  getSingleChat,
};
