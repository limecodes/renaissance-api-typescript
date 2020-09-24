import express from 'express';

import config from './config';

const { port } = config;

const startServer = async () => {
  const app = express();

  app
    .listen(port, () => console.log(`listening on port ${port}`))
    .on('error', err => {
      console.log('Something went wrong', err);
      process.exit(1);
    });
};

startServer();
