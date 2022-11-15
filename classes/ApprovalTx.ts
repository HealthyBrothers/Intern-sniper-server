class ApprovalTx {
  transactionId: String;
  program: String;
  approval: String;
  timestamp: String;

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
}

export default ApprovalTx;
