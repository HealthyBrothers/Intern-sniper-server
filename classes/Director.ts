import mongoose from "mongoose";
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
    lastname: string,
    transactions: ApprovalTx[] | null,
    password: string
  ) {
    super(userId, "Director", email, password);
    this.firstname = firstname;
    this.lastname = lastname;
    this.transactions = transactions;
  }
  public static getSchema() {
    return new mongoose.Schema({
      userId: String,
      role: String,
      email: String,
      firstname: String,
      lastname: String,
      password: String,
      transactions: [
        { type: mongoose.Schema.Types.ObjectId, ref: "ApprovalTx" },
      ],
    });
  }

  public static getModel(): mongoose.Model<any> {
    return mongoose.model("Director", this.getSchema());
  }
}

export default Director;
