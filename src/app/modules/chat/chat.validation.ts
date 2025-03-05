import { z } from 'zod';

const messageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1),
});

const chatSchema = z.object({
  uniqueIdentifier: z.string().min(1),
  messages: z.array(messageSchema),
});

export const ChatValidation = {
  chatSchema,
};
