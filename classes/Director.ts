import User from "./User";
import MediaLink from "./MediaLink";
import ApprovalTx from "./ApprovalTx";

class Director extends User {
  firstName: String;
  lastName: String;
  transactions: ApprovalTx[] | null;

  constructor(
    email: String,
    firstname: String,
    lastname: String,
    transactions: ApprovalTx[] | null,
    password: String,
    salt: String | null,
    mediaLink: MediaLink[] | null,
    profilePicture: String | null
  ) {
    super("Director", email, password, salt, mediaLink, profilePicture);
    this.firstName = firstname;
    this.lastName = lastname;
    this.transactions = transactions;
  } 
  public getName(): string {
    return this.firstName.toString() + ' ' + this.lastName.toString()
  }
}

export default Director;
