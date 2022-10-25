import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import IncorrectFormat from '../errorsHandler/incorrectFormat';
import { Ilogin, IloginService, IUser, IUserRepository } from '../entities';
import loginSchema from './schemas';
import tokenValidation from './validations';

const { JWT_SECRET } = process.env;
export default class LoginService implements IloginService {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async userlogin(userBody: Ilogin): Promise<string> {
    const { email, password } = userBody;

    const validation = loginSchema.validate({ email, password });
    if (validation.error) throw new IncorrectFormat(validation.error.message);

    const user = await this.userRepository.findByEmail(userBody);

    const token = this.generateToken(user as IUser);

    return token;
  }

  private generateToken = (user: IUser) => {
    const payload = { id: user.id, username: user.username, role: user.role, email: user.email };

    return jwt.sign(payload, JWT_SECRET as Secret);
  };

  public validateLogin = (token: string): JwtPayload | void => {
    const payload = tokenValidation(token);
    return payload;
  };
}
