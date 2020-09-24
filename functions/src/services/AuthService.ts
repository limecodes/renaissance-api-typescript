import { Service, Inject } from 'typedi';
import admin from 'firebase-admin';

interface IAuthService {
  getUserByToken(token: string): Promise<admin.auth.UserRecord>;
}

@Service()
export default class AuthService implements IAuthService {
  constructor(@Inject('firebase') private firebaseInstance: admin.app.App) {}

  public async getUserByToken(token: string): Promise<admin.auth.UserRecord> {
    const { uid } = await this.firebaseInstance.auth().verifyIdToken(token);
    const user = await this.firebaseInstance.auth().getUser(uid);

    if (!user) {
      throw new Error("User doesn't exist");
    }

    return user;
  }
}
