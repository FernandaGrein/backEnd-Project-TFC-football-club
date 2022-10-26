import sequelize from '../database/models';
import Matches from '../database/models/matches';
import { ILeaderBoardRep } from '../entities';

export default class LeaderboardRepository implements ILeaderBoardRep {
  private readonly model = Matches;

  public getLeaderBoardHome = async (): Promise<unknown[]> => {
    const [board] = await sequelize.query(this.queryHome);

    return board;
  };

  public getLeaderBoardAway = async (): Promise<unknown[]> => {
    const [awayBoard] = await sequelize.query(this.queryAway);

    return awayBoard;
  };

  public getGeneralLeadboard = async (): Promise<unknown[]> => {
    const [generalBoard] = await sequelize.query(this.generalQuery);
    return generalBoard;
  };

  private readonly queryHome = `SELECT team_name as name, 
  SUM((CASE WHEN home_team_goals > away_team_goals THEN 3 ELSE 0 end)  
  + (CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 end)) as totalPoints, 
  COUNT(team_name) as totalGames,
  SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END) as totalVictories,
  SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) as totalDraws,
  SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END) as totalLosses,
  SUM(home_team_goals) as goalsFavor,  SUM(away_team_goals) as goalsOwn,
  SUM(home_team_goals) - SUM(away_team_goals) as goalsBalance,
  ROUND((SUM((CASE WHEN home_team_goals > away_team_goals THEN 3 ELSE 0 end) 
  + (CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 end))
  / (COUNT(team_name) * 3))*100, 2) as efficiency FROM TRYBE_FUTEBOL_CLUBE.teams as te
  INNER JOIN TRYBE_FUTEBOL_CLUBE.matches as mt ON te.id = mt.home_team  WHERE in_progress = 0
  GROUP BY team_name ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn DESC;`;

  private readonly queryAway = `SELECT team_name as name, 
  SUM((CASE WHEN away_team_goals > home_team_goals THEN 3 ELSE 0 end) 
  + (CASE WHEN away_team_goals = home_team_goals THEN 1 ELSE 0 end)) as totalPoints,
  COUNT(team_name) as totalGames,
  SUM(CASE WHEN away_team_goals > home_team_goals THEN 1 ELSE 0 END) as totalVictories,
  SUM(CASE WHEN away_team_goals = home_team_goals THEN 1 ELSE 0 END) as totalDraws,
  SUM(CASE WHEN away_team_goals < home_team_goals THEN 1 ELSE 0 END) as totalLosses,
  SUM(away_team_goals) as goalsFavor,  SUM(home_team_goals) as goalsOwn, 
  SUM(away_team_goals) - SUM(home_team_goals) as goalsBalance,
  ROUND((SUM((CASE WHEN away_team_goals > home_team_goals THEN 3 ELSE 0 end) 
  + (CASE WHEN away_team_goals = home_team_goals THEN 1 ELSE 0 end))
  / (COUNT(team_name) * 3))*100, 2) as efficiency FROM TRYBE_FUTEBOL_CLUBE.teams as te  
  INNER JOIN TRYBE_FUTEBOL_CLUBE.matches as mt ON te.id = mt.away_team WHERE in_progress = 0  
  GROUP BY team_name ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn DESC;`;

  private readonly generalQuery = `SELECT HTb.name, 
  SUM(HTb.totalPoints + ATb.totalPoints) as totalPoints,
  SUM(HTb.totalGames + ATb.totalGames) AS totalGames,
  SUM(HTb.totalVictories + ATb.totalVictories) AS totalVictories,
  SUM(HTb.totalDraws + ATb.totalDraws) AS totalDraws,
  SUM(HTb.totalLosses + ATb.totalLosses) AS totalLosses,
  SUM(HTb.goalsFavor + ATb.goalsFavor) AS goalsFavor,
  SUM(HTb.goalsOwn + ATb.goalsOwn) AS goalsOwn,
  SUM(HTb.goalsBalance + ATb.goalsBalance) AS goalsBalance,
  ROUND((HTb.totalPoints + ATb.totalPoints) 
  / ((HTb.totalGames + ATb.totalGames) *3)* 100, 2) as efficiency
  FROM (
  SELECT team_name as name, 
  SUM((CASE WHEN away_team_goals > home_team_goals THEN 3 ELSE 0 end) 
  + (CASE WHEN away_team_goals = home_team_goals THEN 1 ELSE 0 end)) as totalPoints,
  COUNT(team_name) as totalGames,
  SUM(CASE WHEN away_team_goals > home_team_goals THEN 1 ELSE 0 END) as totalVictories,
  SUM(CASE WHEN away_team_goals = home_team_goals THEN 1 ELSE 0 END) as totalDraws,
  SUM(CASE WHEN away_team_goals < home_team_goals THEN 1 ELSE 0 END) as totalLosses,
  SUM(away_team_goals) as goalsFavor, 
  SUM(home_team_goals) as goalsOwn, SUM(away_team_goals) - SUM(home_team_goals) as goalsBalance
  FROM TRYBE_FUTEBOL_CLUBE.teams as te INNER JOIN TRYBE_FUTEBOL_CLUBE.matches as mt
  ON te.id = mt.away_team WHERE in_progress = 0 GROUP BY team_name) as HTb
  INNER JOIN ( SELECT team_name as name, 
  SUM((CASE WHEN home_team_goals > away_team_goals THEN 3 ELSE 0 end) 
  + (CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 end)) as totalPoints,
  COUNT(team_name) as totalGames,
  SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END) as totalVictories,
  SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) as totalDraws,
  SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END) as totalLosses,
  SUM(home_team_goals) as goalsFavor, 
  SUM(away_team_goals) as goalsOwn, SUM(home_team_goals) - SUM(away_team_goals) as goalsBalance
  FROM TRYBE_FUTEBOL_CLUBE.teams as te INNER JOIN TRYBE_FUTEBOL_CLUBE.matches as mt
  ON te.id = mt.home_team WHERE in_progress = 0 GROUP BY team_name) as ATb ON HTb.name = ATb.name 
  GROUP BY HTb.name ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn DESC;`;
}
