abstract class User {
  protected userId: String;
  protected role: String;
  protected email: String;
  protected password: String;

  constructor(userId: String, role: String, email: String, password: String) {
    this.userId = userId;
    this.role = role;
    this.email = email;
    this.password = password;
  }

  public introduceUser() {
    console.log(
      `My id: ${this.userId}, my role: ${this.role}, and my email ${this.email}`
    );
  }
}

export default User;
