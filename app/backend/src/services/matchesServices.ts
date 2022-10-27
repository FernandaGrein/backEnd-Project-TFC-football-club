import NotFoundId from '../errorsHandler/notFoundId';
import EqualFieldsError from '../errorsHandler/equalFieldsError';
import TeamsRepository from '../repository/TeamsRepository';
import { IMatchesSimple, IMatchesRepository, IMatchesServices, IPlacar } from '../entities';
import tokenValidation from './validations';

export default class MatchesServices implements IMatchesServices {
  private readonly matchesRepository: IMatchesRepository;

  constructor(matchesRepository: IMatchesRepository) {
    this.matchesRepository = matchesRepository;
  }

  public async finAllMatches(): Promise<IMatchesSimple[]> {
    const allMatches = await this.matchesRepository.finAllMatches();
    return allMatches;
  }

  public async findInProgessMatches(): Promise<IMatchesSimple[]> {
    const matchesInsProgress = await this.matchesRepository.findInProgessMatches();
    return matchesInsProgress;
  }

  public async findEndedMatches(): Promise<IMatchesSimple[]> {
    const endesMatches = await this.matchesRepository.findEndedMatches();
    return endesMatches;
  }

  public async createMatchesInProgress(
    token: string,
    mactheBody: IMatchesSimple,
  ): Promise<IMatchesSimple> {
    tokenValidation(token);
    if (mactheBody.awayTeam === mactheBody.homeTeam) {
      throw new EqualFieldsError('It is not possible to create a match with two equal teams');
    }
    await TeamsRepository.findTeamById(mactheBody.awayTeam);
    await TeamsRepository.findTeamById(mactheBody.homeTeam);

    const newMatch = await this.matchesRepository.createMatchesInProgress(mactheBody);

    return newMatch;
  }

  public async updateMatches(id: number): Promise<void> {
    await this.findMatchById(id);

    await this.matchesRepository.finishedGame(id);
  }

  public async updateMatchesGoals(id: number, goalsBody: IPlacar): Promise<void> {
    await this.findMatchById(id);

    await this.matchesRepository.updateMatchesInProgres(id, goalsBody);
  }

  private async findMatchById(id:number): Promise<void> {
    const findMatch = await this.matchesRepository.findMacthById(id);

    if (!findMatch) throw new NotFoundId('Match not found');
  }
}
