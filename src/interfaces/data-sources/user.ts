import { User } from 'entities';
export interface IUserDataSource {
  findUser(id: string): Promise<User | null>;
}
