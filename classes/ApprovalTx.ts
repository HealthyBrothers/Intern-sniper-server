import mongoose from "mongoose";

class ApprovalTx {
  private transactionId: String;
  private program: String;
  private approval: String;
  private timestamp: String;

  constructor(
    transactionId: String,
    program: String,
    approval: String,
    timestamp: String
  ) {
    this.transactionId = transactionId;
    this.program = program;
    this.approval = approval;
    this.timestamp = timestamp;
  }

  public static getShema(): mongoose.Schema {
    return new mongoose.Schema({
      transactionId: String,
      program: String,
      approval: String,
      timestamp: String,
    });
  }

  public static getModel(): mongoose.Model<any> {
    if (mongoose.models.ApprovalTx) {
      return mongoose.model("ApprovalTx");
    } else {
      return mongoose.model("ApprovalTx", this.getShema());
    }
  }
}

export default ApprovalTx;
