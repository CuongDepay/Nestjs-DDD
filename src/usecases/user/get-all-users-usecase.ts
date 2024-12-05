import { UserRepositoryInterface } from 'src/data/protocols/db/user/user-repository.interface';
import { UserTransformer } from 'src/main/transformers/user/user.transformer';

export class GetAllUsersUseCase {
  constructor(private readonly userRepo: UserRepositoryInterface) {}

  async getAll() {
    const users = await this.userRepo.find();
    return UserTransformer.toUsers(users);
  }
}
