abstract class User {
  userId: String;
  role: String;
  email: String;

  constructor(userId: String, role: String, email: String) {
    this.userId = userId;
    this.role = role;
    this.email = email;
  }

  // checking user
  introduceUser() {
    console.log(
      `My id: ${this.userId}, my role: ${this.role}, and my email ${this.email}`
    );
  }
}

export default User;
