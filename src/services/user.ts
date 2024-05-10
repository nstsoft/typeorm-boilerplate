import { UserDataSource } from '../data-source';
import { IUserDataSource, IUserService } from 'interfaces';

export class UserService implements IUserService {
  private userRepository: IUserDataSource;
  constructor() {
    this.userRepository = new UserDataSource();
  }
  findUser(id: string) {
    return this.userRepository.findUser(id);
  }
}
