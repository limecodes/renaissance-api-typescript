import admin from 'firebase-admin';

import config from '../config';

const {
  firebase: { projectId, clientEmail, privateKey },
} = config;

const serviceAccount: admin.ServiceAccount = {
  projectId,
  clientEmail,
  privateKey,
};

const FirebaseInstance = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default FirebaseInstance;
