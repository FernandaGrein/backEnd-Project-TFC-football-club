import { Router } from 'express';
import TeamController from '../controllers/teamController';
import TeamsRepository from '../repository/TeamsRepository';
import TeamsServices from '../services/teamsServices';

const teamRouter = Router();

const teamRepository = new TeamsRepository();
const teamService = new TeamsServices(teamRepository);
const teamController = new TeamController(teamService);

teamRouter.get('/teams', (req, res) => teamController.findAllTeams(req, res));
teamRouter.get('/teams/:id', (req, res) => teamController.findTeamById(req, res));

export default teamRouter;
