import NotFoundId from '../errorsHandler/notFoundId';
import Team from '../database/models/team';
import { ITeams, ITeamsRepository } from '../entities';

export default class TeamsRepository implements ITeamsRepository {
  private readonly model = Team;

  public async findTeamById(id: number): Promise<ITeams> {
    const teamById = await this.model.findOne({ where: { id } });

    if (!teamById) throw new NotFoundId('There is no team with such id!');

    return teamById;
  }

  public async findAllTeams(): Promise<ITeams[]> {
    const allTeams = await this.model.findAll();
    return allTeams;
  }
}
