import { Application, Request, Response } from 'express';
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
};
