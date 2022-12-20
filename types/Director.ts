import User from './User';
import MediaLink from './MediaLink';
import ApprovalTx from './ApprovalTx';

class Director extends User {
  firstName: String;
  lastName: String;
  transactions: ApprovalTx[] | null;

  constructor(
    userId: String | null,
    email: String,
    firstname: String,
    lastname: String,
    transactions: ApprovalTx[] | null,
    password: String,
    salt: String | null,
    mediaLink: MediaLink[] | null,
    profilePicture: String | null
  ) {
    super(userId, 'Director', email, password, salt, mediaLink, profilePicture);
    this.firstName = firstname;
    this.lastName = lastname;
    this.transactions = transactions;
  }

  public getName(): String {
    return this.firstName.toString() + ' ' + this.lastName.toString();
  }

  public addTransaction(transaction: ApprovalTx): void {
    if (this.transactions == null) {
      this.transactions = [];
    }
    this.transactions.push(transaction);
  }
}

export default Director;
