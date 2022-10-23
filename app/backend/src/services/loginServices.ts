// import { Ilogin, IloginService, IUser } from '../entities';
// import IUserRepository from '../repository/IUserRepository';

// export default class LoginService implements IloginService {
//   private userRepository: IUserRepository;

//   constructor(userRepository: IUserRepository) {
//     this.userRepository = userRepository;
//   }

//   public execute = async ({ email, password }: Ilogin) => {
//     const user = await this.userRepository.findByEmail(email);

//     if (!email || user?.password !== password) throw new Error('All fields must be filled');

//     return user;
//   };
// }
