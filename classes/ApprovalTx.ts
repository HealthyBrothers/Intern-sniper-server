class ApprovalTx {
  program: String;
  approval: String;
  timestamp: String;

  constructor(program: String, approval: String, timestamp: String) {
    this.program = program;
    this.approval = approval;
    this.timestamp = timestamp;
  }
}

export default ApprovalTx;
