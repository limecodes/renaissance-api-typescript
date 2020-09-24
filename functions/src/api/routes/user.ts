import { Router } from 'express';

import isAuth from '../middleware/isAuth';
import { allowIfAny } from '../middleware/accessLayer';
import UserController from '../controllers/UserController';

const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  // Also would want to put a validator in the very front to validate the entire request
  route.get(
    '/',
    isAuth,
    allowIfAny(['SUPERADMIN', 'ADMIN']),
    UserController.getAllUsers,
  );
};
