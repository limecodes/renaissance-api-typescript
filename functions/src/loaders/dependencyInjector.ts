import { Container } from 'typedi';

import LoggerInstance from './logger';
import FirebaseInstance from './firebase';

export default () => {
  Container.set('logger', LoggerInstance);
  Container.set('firebase', FirebaseInstance);
};
