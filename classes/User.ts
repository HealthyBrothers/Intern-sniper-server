import MediaLink from "./MediaLink";

abstract class User {
  mediaLink: MediaLink[] | null;
  role: String;
  email: String;
  password: String;
  salt: String;
  profilePicture: String | null;

  constructor(
    role: String,
    email: String,
    password: String,
    mediaLink: MediaLink[] | null,
    profilePicture: String | null
  ) {
    this.role = role;
    this.email = email;
    this.password = password;
    this.mediaLink = mediaLink;
    this.profilePicture = profilePicture;
  }

  public introduceUser() {
    console.log(
      `my role: ${this.role}, and my email ${this.email}`
    );
  }
}

export default User;
