import { IUser, IUserRepository } from '../entities';

export default class UserRepository implements IUserRepository {
  findByEmail(email: string): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
}
