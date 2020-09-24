import { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import config from '../config';
import routes from '../api';

const {
  api: { prefix },
} = config;

export default ({ app }: { app: Application }) => {
  app.get('/status', (req: Request, res: Response) => {
    res.status(200).end();
  });

  app.head('/status', (req: Request, res: Response) => {
    res.status(200).end();
  });

  app.enable('trust proxy');

  app.use(cors());

  app.use(bodyParser.json());

  app.use(prefix, routes());

  app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
    console.log('error handler');
    res.status(err.status || 500);
    res.json({ errors: { message: err.message } });
    next();
  });
};
