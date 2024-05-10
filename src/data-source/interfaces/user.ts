import { User } from 'entities';
export interface IUserRepository {
  findUser(id: string): Promise<User | null>;
}
