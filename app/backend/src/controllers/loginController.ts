import { Request, Response } from 'express';
import { IloginService, IUser } from '../entities';
import InvalidFields from '../errorsHandler/invalidFieldsError';
import 'express-async-errors';

export default class LoginController {
  private readonly loginService: IloginService;

  constructor(loginService: IloginService) {
    this.loginService = loginService;
  }

  public async userLogin(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const token = await this.loginService.userlogin({ email, password });

    return res.status(200).json({ token });
  }

  public validateLogin(req: Request, res: Response): Response {
    const token = req.headers.authorization;

    if (!token) throw new InvalidFields('token not found');

    const payload = this.loginService.validateLogin(token) as IUser;

    return res.status(200).json({ role: payload.role });
  }
}
