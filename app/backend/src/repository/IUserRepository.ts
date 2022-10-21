import { IUser } from '../entities';

export default interface IUserRepository {
  findByEmail(email:string): Promise<IUser | null>
}
