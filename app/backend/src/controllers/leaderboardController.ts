import { Request, Response } from 'express';
import { ILeaderBoardService } from '../entities';

export default class LeaderboardController {
  private readonly lbServices: ILeaderBoardService;

  constructor(service: ILeaderBoardService) {
    this.lbServices = service;
  }

  public async getLeaderBoardHome(_req: Request, res: Response): Promise<Response> {
    const board = await this.lbServices.getLeaderBoardHome();
    return res.status(200).json(board);
  }
}
