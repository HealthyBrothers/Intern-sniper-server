import User from "./User";
import MediaLink from "./MediaLink";
import ApprovalTx from "./ApprovalTx";

class Director extends User {
  firstname: String;
  lastname: String;
  transactions: ApprovalTx[] | null;

  constructor(
    userId: String,
    email: String,
    firstname: String,
    lastname: String,
    transactions: ApprovalTx[] | null,
    password: String,
    mediaLink: MediaLink[] | null,
    profilePicture: String | null
  ) {
    super(userId, "Director", email, password, mediaLink, profilePicture);
    this.firstname = firstname;
    this.lastname = lastname;
    this.transactions = transactions;
  }
}

export default Director;
