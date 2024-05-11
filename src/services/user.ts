import { IUserDataSource, IUserService } from 'interfaces';

import { UserDataSource } from '../data-source';

export class UserService implements IUserService {
  private userDataSource: IUserDataSource;

  constructor() {
    this.userDataSource = new UserDataSource();
  }

  findUser(id: string) {
    return this.userDataSource.findOneById(id);
  }
}
