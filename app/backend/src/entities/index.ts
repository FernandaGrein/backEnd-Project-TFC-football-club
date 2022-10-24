export interface IloginService {
  userlogin(user: Ilogin): Promise<string>
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
