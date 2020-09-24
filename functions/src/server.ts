import express from 'express';

import config from './config';
import Logger from './loaders/logger';

const { port, env } = config;

const startServer = async () => {
  const app = express();

  app
    .listen(port, () =>
      Logger.info(`listening on port ${port}, on environment ${env}`),
    )
    .on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
};

startServer();
