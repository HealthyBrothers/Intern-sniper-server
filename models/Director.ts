import User from "./User";
import ApprovalTx from "./ApprovalTx";

class Director extends User {
  firstname: string;
  lastname: string;
  transactions: ApprovalTx[];

  constructor(
    userId: String,
    email: String,
    firstname: string,
    lastname: string,
    transactions: ApprovalTx[]
  ) {
    super(userId, "Director", email);
    this.firstname = firstname;
    this.lastname = lastname;
    this.transactions = transactions;
  }
}

export default Director;
