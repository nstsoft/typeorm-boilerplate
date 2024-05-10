import { userRouter } from 'controllers/index';
import { MongoSource, UserDataSource } from 'data-source';
import express from 'express';

MongoSource.initialize();

const a = '1';

console.log(UserDataSource);

console.log(process.env.MONGO_DB_URL);

const app = express();
app.use('/api/v1/user', userRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
