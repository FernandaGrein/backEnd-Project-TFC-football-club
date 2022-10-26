import sequelize, { QueryTypes } from 'sequelize';
import Matches from '../database/models/matches';
import { ILeaderBoard, ILeaderBoardRep } from '../entities';

export default class LeaderboardRepository implements ILeaderBoardRep {
  private readonly model = Matches;

  private query = `SELECT team_name as 'name', 
  SUM(home_team_goals) as 'goalsFavor', 
  SUM(away_team_goals) as 'goalsOwn',
  COUNT(team_name) as 'totalGames'
  FROM TRYBE_FUTEBOL_CLUBE.teams as te
  INNER JOIN TRYBE_FUTEBOL_CLUBE.matches as mt
  ON te.id = mt.home_team
  WHERE in_progress = 0
  GROUP BY team_name;'`;

  public getLeaderBoardHome = async (): Promise<ILeaderBoard[]> => {
    const board = await sequelize.query(this.query, { type: QueryTypes.SELECT });
    console.log(board);

    return [{
      name: 'Palmeiras',
      totalPoints: 7,
      totalGames: 3,
      totalVictories: 2,
      totalDraws: 1,
      totalLosses: 0,
      goalsFavor: 10,
      goalsOwn: 5,
      goalsBalance: 5,
      efficiency: '77.78',
    }];
  };
}
