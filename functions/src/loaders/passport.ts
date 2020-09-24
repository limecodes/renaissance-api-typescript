import { Application } from 'express';
import { Container } from 'typedi';
import passport from 'passport';
import { Strategy } from 'passport-http-bearer';

import AuthService from '../services/AuthService';

export default ({ app }: { app: Application }) => {
  app.use(passport.initialize());

  passport.use(
    new Strategy(async (token, done) => {
      const authServiceInstance = Container.get(AuthService);

      try {
        const user = await authServiceInstance.getUserByToken(token);
        done(null, user);
      } catch (err) {
        done(err);
      }
    }),
  );
};
