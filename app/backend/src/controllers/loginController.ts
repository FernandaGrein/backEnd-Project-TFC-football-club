import { Request, Response } from 'express';
import LoginService from '../services/loginServices';
import { IloginService } from '../entities';

export default class LoginController {
  private readonly loginService: IloginService;

  constructor() {
    this.loginService = new LoginService();
  }
  //   constructor(loginService: IloginService) {
  //     this.loginService = loginService;
  //   }

  public async userLogin(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const token = await this.loginService.userlogin({ email, password });

    return res.status(200).json({ token });
  }
}
