import { JwtPayload } from 'jsonwebtoken';

export interface IloginService {
  userlogin(user: Ilogin): Promise<string>
  validateLogin(token: string): JwtPayload | void
}

export interface IUserRepository {
  findByEmail(userBody: Ilogin): Promise<IUser | null>
}

export interface IUser {
  id?: number;
  username: string;
  email: string;
  role: string;
  password?: string;
}

export interface Ilogin {
  email: string,
  password: string
}

export interface validToken {
  role: string
}
