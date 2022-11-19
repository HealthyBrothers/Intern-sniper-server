import mongoose, { Mongoose } from "mongoose";
import Company from "./Company";
class ApprovalTx {
  company: mongoose.ObjectId;
  approval: Boolean;
  timestamp: String;

  constructor(
    company: mongoose.ObjectId,
    approval: Boolean,
    timestamp: String
  ) {
    this.company = company;
    this.approval = approval;
    this.timestamp = timestamp;
  }
}

export default ApprovalTx;
