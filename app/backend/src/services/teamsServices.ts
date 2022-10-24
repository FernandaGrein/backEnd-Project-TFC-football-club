import { ITeams, ITeamsRepository, ITeamsService } from '../entities';

export default class TeamsServices implements ITeamsService {
  private readonly teamsRepository: ITeamsRepository;

  constructor(teamsRepository: ITeamsRepository) {
    this.teamsRepository = teamsRepository;
  }

  public async findAllTeams(): Promise<ITeams[]> {
    const teams = await this.teamsRepository.findAllTeams();
    return teams;
  }

  public async findTeamById(id: number): Promise<ITeams> {
    const teamById = await this.teamsRepository.findTeamById(id);
    return teamById;
  }
}
