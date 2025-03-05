import express, { Request, Response } from 'express';
import cors from 'cors';
// import router from './app/routes';
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3001', 'http://localhost:3000', 'http://localhost:3002'],
    credentials: true,
  }),
);

// app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});
export default app;
