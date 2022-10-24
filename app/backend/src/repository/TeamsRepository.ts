import NotFoundId from '../errorsHandler/notFoundId';
import Team from '../database/models/team';
import { ITeams, ITeamsRepository } from '../entities';

export default class TeamsRepository implements ITeamsRepository {
  private readonly model = Team;

  async findTeamById(id: number): Promise<ITeams> {
    const teamById = await this.model.findByPk(id);
    if (!teamById) throw new NotFoundId('There is no team with such id!');

    return teamById as ITeams;
  }

  async findAllTeams(): Promise<ITeams[]> {
    const allTeams = await this.model.findAll();
    return allTeams;
  }
}
