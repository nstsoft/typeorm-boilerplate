import { User } from 'entities';
export interface IUserService {
  findUser(id: string): Promise<User | null>;
}
