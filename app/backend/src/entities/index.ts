import { JwtPayload } from 'jsonwebtoken';

export interface IloginService {
  userlogin(user: Ilogin): Promise<string>
  validateLogin(token: string): JwtPayload | void
}

export interface IUserRepository {
  findByEmail(userBody: Ilogin): Promise<IUser | null>
}

export interface IUser {
  id?: number;
  username: string;
  email: string;
  role: string;
  password?: string;
}

export interface Ilogin {
  email: string,
  password: string
}

export interface ITeamsService {
  findAllTeams(): Promise<ITeams[]>
  findTeamById(id:number): Promise<ITeams>
}

export interface ITeamsRepository {
  findAllTeams(): Promise<ITeams[]>

}

export interface ITeams {
  id: number,
  teamName: string,
}

export interface IMatchesRepository {
  finAllMatches(): Promise<IMatchesSimple[]>
  findInProgessMatches(): Promise<IMatchesSimple[]>
  findEndedMatches(): Promise<IMatchesSimple[]>
  createMatchesInProgress({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }
  : IMatchesSimple): Promise<IMatchesSimple>
  finishedGame(id:number): Promise<void>
  findMacthById(id:number): Promise<IMatchesSimple | null>
  updateMatchesInProgres(id: number, { homeTeamGoals, awayTeamGoals }: IPlacar): Promise<void>
}

export interface IMatchesServices {
  finAllMatches(): Promise<IMatchesSimple[]>
  findInProgessMatches(): Promise<IMatchesSimple[]>
  findEndedMatches(): Promise<IMatchesSimple[]>
  createMatchesInProgress(token: string, { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }
  : IMatchesSimple): Promise<IMatchesSimple>
  updateMatches(id: number): Promise<void>
  updateMatchesGoals(id: number, goalsBody: IPlacar): Promise<void>
}

export interface IMatches extends IMatchesSimple{
  teamHome: {
    teamName: string
  },
  teamAway: {
    teamName: string
  }
}

export interface IMatchesSimple {
  id?: number,
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number,
  inProgress?: number | boolean,
}

export interface IPlacar {
  homeTeamGoals: number,
  awayTeamGoals: number,
}
