import mongoose from "mongoose";

export const ApprovalTxSchema: mongoose.Schema = new mongoose.Schema({
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
    required: true,
  },
  approval: { type: String, required: true },
  timestamp: { type: String, required: false },
});
