import { User } from 'entities';
import { IRawUser, IUserDataSource } from 'interfaces';
import { MongoRepository, ObjectId } from 'typeorm';

import { UserModel } from '../models';
import { MongoSource } from '../source';

const userRepository = MongoSource.getRepository(UserModel);

export class UserDataSource implements IUserDataSource {
  private userRepository: MongoRepository<UserModel>;

  constructor() {
    this.userRepository = MongoSource.getMongoRepository(UserModel);
  }

  async findOneById(id: string) {
    const data: IRawUser = await userRepository.findOneBy({ _id: new ObjectId(id) });
    return data && User.toDomain(data);
  }
}
