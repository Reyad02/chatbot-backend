import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['https://chat-bot-nine-liart.vercel.app'],
    credentials: true,
  }),
);

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});
export default app;
