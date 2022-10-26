import { Router } from 'express';
import LeaderboardService from '../services/leaderboardServices';
import LeaderboardRepository from '../repository/leaderboardRepository';
import LeaderboardController from '../controllers/leaderboardController';

const leaderBoardRouter = Router();

const leaderBoardRep = new LeaderboardRepository();
const leaderBoardServ = new LeaderboardService(leaderBoardRep);
const leaderBoardCont = new LeaderboardController(leaderBoardServ);

leaderBoardRouter.get('/leaderboard/home', (req, res) => leaderBoardCont
  .getLeaderBoardHome(req, res));

export default leaderBoardRouter;
