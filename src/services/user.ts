import { IUserDataSource, IUserService } from 'interfaces';

import { UserDataSource } from '../data-source';

export class UserService implements IUserService {
  private userRepository: IUserDataSource;

  constructor() {
    this.userRepository = new UserDataSource();
  }

  findUser(id: string) {
    return this.userRepository.findUser(id);
  }
}
