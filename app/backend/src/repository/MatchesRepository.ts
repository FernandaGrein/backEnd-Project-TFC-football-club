import Team from '../database/models/team';
import { IMatchesSimple, IMatchesRepository } from '../entities';
import Matches from '../database/models/matches';

export default class MatchesRepository implements IMatchesRepository {
  private readonly model = Matches;

  public async finAllMatches(): Promise<IMatchesSimple[]> {
    const allTeams = await this.model.findAll({
      include: [
        {
          model: Team,
          as: 'teamHome',
          attributes: { exclude: ['id'] },
        },
        {
          model: Team,
          as: 'teamAway',
          attributes: { exclude: ['id'] },
        },
      ],
    });
    return allTeams;
  }
}
