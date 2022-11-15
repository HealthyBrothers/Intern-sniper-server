import MediaLink from "./MediaLink";

abstract class User {
  protected mediaLink: MediaLink[] | null;
  protected userId: String;
  protected role: String;
  protected email: String;
  protected password: String;
  protected profilePicture: String | null;

  constructor(
    userId: String,
    role: String,
    email: String,
    password: String,
    mediaLink: MediaLink[] | null,
    profilePicture: String | null
  ) {
    this.userId = userId;
    this.role = role;
    this.email = email;
    this.password = password;
    this.mediaLink = mediaLink;
    this.profilePicture = profilePicture;
  }

  public introduceUser() {
    console.log(
      `My id: ${this.userId}, my role: ${this.role}, and my email ${this.email}`
    );
  }
}

export default User;
