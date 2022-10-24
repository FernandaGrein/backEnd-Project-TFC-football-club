import Team from '../database/models/team';
import { IMatchesRepository } from '../entities';
import Matches from '../database/models/matches';

export default class MatchesRepository implements IMatchesRepository {
  private readonly model = Matches;

  public async finAllMatches(): Promise<void> {
    const allTeams = await this.model.findAll({
      include: [
        {
          model: Team,
          as: 'teamHome',
        },
        {
          model: Team,
          as: 'teamAway',
        },
      ],
    });

    console.log('----REPOSITORY-----', allTeams);
    // return allTeams;
  }
}
