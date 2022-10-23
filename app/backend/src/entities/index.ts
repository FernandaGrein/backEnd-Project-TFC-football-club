export interface IloginService {
  userlogin(user: Ilogin): Promise<string>
}

export interface IUserRepository {
  findByEmail(email:string): Promise<IUser | null>
}

export interface IUser {
  id?: number;
  username: string;
  email: string;
  password?: string;
}

export interface Ilogin {
  email: string,
  password: string
}
