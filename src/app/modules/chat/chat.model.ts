import { model, Schema } from 'mongoose';
import IChat from './chat.interface';

const chatSchema = new Schema<IChat>(
  {
    uniqueIdentifier: { type: String, required: true },
    messages: [
      {
        role: { type: String, enum: ['user', 'assistant'], required: true },
        content: { type: String, required: true },
      },
    ],
  },
  { timestamps: true },
);

const Chat = model<IChat>('Message', chatSchema);
export default Chat;
