import { Router } from 'express';
import MatchesController from '../controllers/matchesController';
import MatchesRepository from '../repository/MatchesRepository';
import MatchesServices from '../services/matchesServices';

const matchesRouter = Router();

const matchesRepository = new MatchesRepository();
const macthesServices = new MatchesServices(matchesRepository);
const matchesController = new MatchesController(macthesServices);

matchesRouter.get('/matches', (req, res) => matchesController.findAllMatches(req, res));

export default matchesRouter;
