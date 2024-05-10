import { UserModel } from '../models';
import { MongoSource } from '../source';
import { Repository, ObjectId } from 'typeorm';
import { IUserRepository } from '../interfaces/user';

const userRepository = MongoSource.getRepository(UserModel);

export class UserRepository implements IUserRepository {
  userRepository: Repository<UserModel>;
  constructor() {
    this.userRepository = MongoSource.getRepository(UserModel);
  }
  findUser(id: string) {
    return userRepository.findOneBy({ _id: new ObjectId(id) });
  }
}
