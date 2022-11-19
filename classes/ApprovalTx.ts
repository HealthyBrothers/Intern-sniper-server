class ApprovalTx {
  company: String;
  approval: Boolean;
  timestamp: String;

  constructor(company: String, approval: Boolean, timestamp: String) {
    this.company = company;
    this.approval = approval;
    this.timestamp = timestamp;
  }
}

export default ApprovalTx;
