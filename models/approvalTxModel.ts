import mongoose from "mongoose";
import ApprovalTx from "../classes/ApprovalTx";

interface IApprovalTx extends ApprovalTx, mongoose.Document {}

export const ApprovalTxSchema: mongoose.Schema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  approval: { type: String, required: true },
  timestamp: { type: String, required: false },
});

const ApprovalTxModel = mongoose.model<IApprovalTx>(
  "ApprovalTx",
  ApprovalTxSchema
);

export default ApprovalTxModel;
