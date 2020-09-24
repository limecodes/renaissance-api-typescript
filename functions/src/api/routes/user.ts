import { Router } from 'express';
import UserController from '../controllers/UserController';

const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get('/', UserController.getAllUsers);
};
