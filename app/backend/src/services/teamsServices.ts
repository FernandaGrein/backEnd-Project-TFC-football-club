import { ITeams, ITeamsRepository, ITeamsService } from '../entities';

export default class TeamsServices implements ITeamsService {
  private readonly teamsRepository: ITeamsRepository;

  constructor(teamsRepository: ITeamsRepository) {
    this.teamsRepository = teamsRepository;
  }

  findAllTeams(): Promise<ITeams[]> {
    const teams = this.teamsRepository.findAllTeams();
    return teams;
  }

  findTeamById(id: number): Promise<ITeams> {
    const teamById = this.findTeamById(id);
    return teamById;
  }
}
