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

  public async findMacthesInProgress(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;

    if (inProgress) {
      const matches = await this.matchesServices.findInProgessMatches();
      return res.status(200).json(matches);
    }

    const endedMatches = await this.matchesServices.findEndedMatches();
    return res.status(200).json(endedMatches);
  }
}
