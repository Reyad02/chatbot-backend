interface IChat {
  messages: Message[];
  uniqueIdentifier: string;
}

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default IChat;
