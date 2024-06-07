import { User } from 'entities';
import { IUserData, IUserDataSource } from 'interfaces';
import { UserType } from 'types';

import { UserModel } from '../models';
import { BaseDataSource } from './base';

export class UserDataSource extends BaseDataSource<UserModel, UserType, IUserData> implements IUserDataSource {
  constructor() {
    super(UserModel, User);
  }
}
