import * as functions from 'firebase-functions';
import app from './app';
/* eslint-disable import/prefer-default-export */
export const api = functions.https.onRequest(app);
