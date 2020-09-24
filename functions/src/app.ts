import express from 'express';

const app = express();

const load = async () => {
  /* eslint-disable global-require */
  /* eslint-disable @typescript-eslint/no-var-requires */
  await require('./loaders').default({ expressApp: app });
};

load();

export default app;
