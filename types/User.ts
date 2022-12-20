import crypto from 'crypto';
import MediaLink from './MediaLink';

abstract class User {
  userId: String | null;
  mediaLink: MediaLink[] | null;
  role: String;
  email: String;
  password: String;
  salt: String | null;
  profilePicture: String | null;

  constructor(
    userId: String | null,
    role: String,
    email: String,
    password: String,
    salt: String | null,
    mediaLink: MediaLink[] | null,
    profilePicture: String | null
  ) {
    this.userId = userId;
    this.role = role;
    this.email = email;
    this.password = password;
    this.salt = salt;
    this.mediaLink = mediaLink;
    this.profilePicture = profilePicture;
    if (this.salt == null) this.hashPassword(password as string);
  }

  public hashPassword(password: string): void {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto
      .pbkdf2Sync(password, this.salt as string, 1000, 64, 'sha512')
      .toString('hex');
  }

  public vaildatePassword(password: string): boolean {
    const hashPassword = crypto
      .pbkdf2Sync(password, this.salt as string, 1000, 64, 'sha512')
      .toString('hex');
    return this.password === hashPassword;
  }

  public introduceUser(): void {
    console.log(`my role: ${this.role}, and my email ${this.email}`);
  }
}

export default User;
