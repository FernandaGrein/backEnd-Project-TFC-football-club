import InvalidFields from '../errorsHandler/invalidFieldsError';
import { Ilogin, IloginService, IUserRepository } from '../entities';

export default class LoginService implements IloginService {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async userlogin(userBody: Ilogin): Promise<string> {
    const user = await this.userRepository.findByEmail(userBody.email);

    if (user && user.password !== userBody.password) {
      throw new InvalidFields('Incorrect email or password');
    }

    return 'ok';
  }
}
