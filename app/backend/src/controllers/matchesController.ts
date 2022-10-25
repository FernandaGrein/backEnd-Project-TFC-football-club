import { Request, Response } from 'express';
import { IMatchesServices } from '../entities';

export default class MatchesController {
  private readonly matchesServices: IMatchesServices;

  constructor(matchesServices: IMatchesServices) {
    this.matchesServices = matchesServices;
  }

  public async findAllMatches(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;

    if (inProgress === 'true') {
      const matches = await this.matchesServices.findInProgessMatches();
      return res.status(200).json(matches);
    }

    if (inProgress === 'false') {
      const endedMatches = await this.matchesServices.findEndedMatches();
      return res.status(200).json(endedMatches);
    }

    const allMatches = await this.matchesServices.finAllMatches();
    return res.status(200).json(allMatches);
  }
}
