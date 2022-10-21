import { Request, Response } from 'express';
import { IloginService } from '../entities';

export default class LoginController {
  private loginService: IloginService;

  constructor(loginService: IloginService) {
    this.loginService = loginService;
  }

  public makeLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = await this.loginService.execute({ email, password });
    return res.sendStatus(200);
  };
}
