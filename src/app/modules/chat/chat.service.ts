import IChat from './chat.interface';
import Chat from './chat.model';

const createChat = async (messages: IChat) => {
    // console.log(messages.uniqueIdentifier);
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

export const chatServices = {
  createChat,
};
