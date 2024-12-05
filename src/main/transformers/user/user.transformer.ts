import { UserModel } from 'src/infrastructure/database/mongodb/models/user.model';

export class UserTransformer {
  static toUser(user: UserModel) {
    return {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toUsers(users: UserModel[]) {
    return users.map(this.toUser);
  }
}
