import { IMatchesSimple, IMatchesRepository, IMatchesServices } from '../entities';

export default class MatchesServices implements IMatchesServices {
  private readonly matchesRepository: IMatchesRepository;

  constructor(matchesRepository: IMatchesRepository) {
    this.matchesRepository = matchesRepository;
  }

  public async finAllMatches(): Promise<IMatchesSimple[]> {
    const allMatches = await this.matchesRepository.finAllMatches();
    return allMatches;
  }
}
