import { Application } from 'express';

import Logger from './logger';
import dependencyInjectorLoader from './dependencyInjector';
import expressLoader from './express';
import passportLoader from './passport';

export default async ({ expressApp }: { expressApp: Application }) => {
  await dependencyInjectorLoader();
  Logger.info('Dependency Injector loaded');

  await expressLoader({ app: expressApp });
  Logger.info('Express loaded');

  await passportLoader({ app: expressApp });
  Logger.info('Passport loaded');
};
