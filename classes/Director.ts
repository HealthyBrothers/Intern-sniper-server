import User from "./User";
import ApprovalTx from "./ApprovalTx";

class Director extends User {
  private firstname: String;
  private lastname: String;
  private transactions: ApprovalTx[] | null;

  constructor(
    userId: String,
    email: String,
    firstname: String,
    lastname: String,
    transactions: ApprovalTx[] | null,
    password: String
  ) {
    super(userId, "Director", email, password);
    this.firstname = firstname;
    this.lastname = lastname;
    this.transactions = transactions;
  }
}

export default Director;
