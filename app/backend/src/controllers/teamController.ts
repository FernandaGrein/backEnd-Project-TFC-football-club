import { Request, Response } from 'express';
import { ITeamsService } from '../entities';

export default class TeamController {
  private readonly teamService: ITeamsService;

  constructor(teamService: ITeamsService) {
    this.teamService = teamService;
  }

  public async findAllTeams(_req: Request, res: Response): Promise<Response> {
    const allTeams = await this.teamService.findAllTeams();
    return res.status(200).json(allTeams);
  }

  public async findTeamById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const numberId = Number(id);

    const team = await this.teamService.findTeamById(numberId);

    return res.status(200).json(team);
  }
}
