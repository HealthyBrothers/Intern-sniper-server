abstract class User {
  protected userId: String;
  protected role: String;
  protected email: String;

  constructor(userId: String, role: String, email: String) {
    this.userId = userId;
    this.role = role;
    this.email = email;
  }

  public introduceUser() {
    console.log(
      `My id: ${this.userId}, my role: ${this.role}, and my email ${this.email}`
    );
  }
}

export default User;
