import * as admin from 'firebase-admin';

declare global {
  namespace Express {
    export interface User extends admin.auth.UserRecord {
      customClaims?: {
        role: 'SUPERADMIN' | 'ADMIN' | 'COUNSELLOR' | 'SPECIALIST';
      };
    }
  }
}
