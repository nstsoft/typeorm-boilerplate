import { DataSource } from 'typeorm';
import { UserModel } from './models';

const url = process.env.MONGO_DB_URL.replace('{user}', process.env.DB_USERNAME)
  .replace('{password}', process.env.DB_PASSWORD)
  .replace('{database}', process.env.DB_NAME);

export const MongoSource = new DataSource({
  url,
  type: 'mongodb',
  synchronize: true,
  logging: false,
  entities: [UserModel],
});
