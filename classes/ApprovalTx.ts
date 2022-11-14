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
}

export default ApprovalTx;
