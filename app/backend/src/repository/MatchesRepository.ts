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

  public async findInProgessMatches(): Promise<IMatchesSimple[]> {
    const matchesInProgress = await this.model.findAll({
      where: { inProgress: true },
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
    return matchesInProgress;
  }

  public async findEndedMatches(): Promise<IMatchesSimple[]> {
    const endedMatches = await this.model.findAll({
      where: { inProgress: false },
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
    return endedMatches;
  }

  public async createMatchesInProgress({ homeTeam, awayTeam, homeTeamGoals,
    awayTeamGoals }: IMatchesSimple): Promise<IMatchesSimple> {
    const dataValues = await this.model.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
    });

    console.log('--------', dataValues);

    const newMatch = {
      id: dataValues.id,
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    };

    return newMatch;
  }
}
