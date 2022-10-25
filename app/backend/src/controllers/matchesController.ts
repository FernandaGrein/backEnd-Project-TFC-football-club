import { Request, Response } from 'express';
import InvalidFields from '../errorsHandler/invalidFieldsError';
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

  public async createMatchesInProgress(req: Request, res: Response): Promise<Response> {
    const matchBody = req.body;
    const token = req.headers.authorization;

    if (!token) throw new InvalidFields('Token not Found');

    const newMatch = await this.matchesServices.createMatchesInProgress(token, matchBody);

    return res.status(201).json(newMatch);
  }

  public async updateMatches(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const numberId = Number(id);

    await this.matchesServices.updateMatches(numberId);
    return res.status(200).json({ message: 'Finished' });
  }

  public async updateMatchesInProgress(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const goalsMatch = req.body;
    const numberId = Number(id);

    await this.matchesServices.updateMatchesGoals(numberId, goalsMatch);

    return res.status(200).json({ message: 'Updated' });
  }
}
