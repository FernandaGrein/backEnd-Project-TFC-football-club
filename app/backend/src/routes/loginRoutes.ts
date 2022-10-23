import { Router } from 'express';
// import LoginService from '../services/loginServices';
import LoginController from '../controllers/loginController';

const userRouter = Router();

// const userRepository = new userRepository();
// const loginService = new LoginService(userRepository);
const loginController = new LoginController(); // loginService

userRouter.post('/login', (req, res) => loginController.userLogin(req, res));

export default userRouter;
