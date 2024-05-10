import { IUserDataSource } from 'interfaces';
import { ObjectId, Repository } from 'typeorm';

import { UserModel } from '../models';
import { MongoSource } from '../source';

const userRepository = MongoSource.getRepository(UserModel);

export class UserDataSource implements IUserDataSource {
  private userRepository: Repository<UserModel>;

  constructor() {
    this.userRepository = MongoSource.getRepository(UserModel);
  }

  findUser(id: string) {
    return userRepository.findOneBy({ _id: new ObjectId(id) });
  }
}
