export interface IloginService {
  execute(): string
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
