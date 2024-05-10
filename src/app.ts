import express from 'express';
import { MongoSource } from 'data-source';
import { userRouter } from 'controllers/index';

MongoSource.initialize();

console.log(process.env.MONGO_DB_URL);

const app = express();
app.use('/api/v1/user', userRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
