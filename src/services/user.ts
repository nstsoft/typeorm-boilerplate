import { UserRepository, IUserRepository } from '../data-source';

export class UserService {
  userRepository: IUserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  findUser(id: string) {
    return this.userRepository.findUser(id);
  }
}
