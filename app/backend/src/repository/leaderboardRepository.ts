import sequelize from '../database/models';
import Matches from '../database/models/matches';
import { ILeaderBoardRep } from '../entities';

export default class LeaderboardRepository implements ILeaderBoardRep {
  private readonly model = Matches;

  private query = `SELECT team_name as name, 
  SUM((CASE WHEN home_team_goals > away_team_goals THEN 3 ELSE 0 end) 
  + (CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 end)) as totalPoints,
  COUNT(team_name) as totalGames,
  SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END) as totalVictories,
  SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) as totalDraws,
  SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END) as totalLosses,
  SUM(home_team_goals) as goalsFavor, 
  SUM(away_team_goals) as goalsOwn,
  SUM(home_team_goals) - SUM(away_team_goals) as goalsBalance,
  ROUND((SUM((CASE WHEN home_team_goals > away_team_goals THEN 3 ELSE 0 end) 
  + (CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 end))
  / (COUNT(team_name) * 3))*100, 2) as efficiency
  FROM TRYBE_FUTEBOL_CLUBE.teams as te
  INNER JOIN TRYBE_FUTEBOL_CLUBE.matches as mt
  ON te.id = mt.home_team
  WHERE in_progress = 0
  GROUP BY team_name
  ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn DESC;`;

  public getLeaderBoardHome = async (): Promise<unknown[]> => {
    const [board] = await sequelize.query(this.query);
    console.log(board);

    return board;
  };
}
