import { Request, Response } from 'express';
import { IMatchesServices } from '../entities';

export default class MatchesController {
  private readonly matchesServices: IMatchesServices;

  constructor(matchesServices: IMatchesServices) {
    this.matchesServices = matchesServices;
  }

  public async findAllMatches(_req: Request, res: Response): Promise<Response> {
    const allMatches = await this.matchesServices.finAllMatches();
    return res.status(200).json(allMatches);
  }
}
