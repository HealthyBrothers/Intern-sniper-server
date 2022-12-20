import mongoose from 'mongoose';
import ApprovalTx from '../types/ApprovalTx';
export interface IApprovalTx extends ApprovalTx, mongoose.Document {}

export const ApprovalTxSchema: mongoose.Schema =
  new mongoose.Schema<IApprovalTx>({
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    approval: { type: String, required: true },
    timestamp: { type: String, required: false },
  });
