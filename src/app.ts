import { UserController } from 'controllers/index';
import { MongoSource } from 'data-source';
import express from 'express';

MongoSource.initialize();

const app = express();

app.use('/api/v1', new UserController().route);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
