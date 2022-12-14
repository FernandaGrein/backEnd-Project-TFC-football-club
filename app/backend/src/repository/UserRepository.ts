import { compare } from 'bcryptjs';
import InvalidFields from '../errorsHandler/invalidFieldsError';
import User from '../database/models/user';
import { Ilogin, IUser, IUserRepository } from '../entities';

export default class UserRepository implements IUserRepository {
  private readonly model = User;

  async findByEmail({ email, password }: Ilogin): Promise<IUser> {
    const userFromDb = await this.model.findOne({ where: { email } });

    if (!userFromDb) throw new InvalidFields('Incorrect email or password');

    const check = await compare(password, userFromDb.password);

    if (!check) throw new InvalidFields('Incorrect email or password');

    const user: IUser = {
      id: userFromDb.id,
      username: userFromDb.username,
      role: userFromDb.role,
      email: userFromDb.email,
    };

    return user;
  }
}
