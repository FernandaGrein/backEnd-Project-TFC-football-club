import { ILeaderBoardRep, ILeaderBoardService } from '../entities';

export default class LeaderboardService implements ILeaderBoardService {
  private readonly repository: ILeaderBoardRep;

  constructor(repository: ILeaderBoardRep) {
    this.repository = repository;
  }

  public async getLeaderBoardHome(): Promise<unknown[]> {
    const board = await this.repository.getLeaderBoardHome();
    return board;
  }
}
