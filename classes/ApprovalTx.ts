import Company from "./Company";
class ApprovalTx {
  company: Company;
  approval: Boolean;
  timestamp: String;

  constructor(company: Company, approval: Boolean, timestamp: String) {
    this.company = company;
    this.approval = approval;
    this.timestamp = timestamp;
  }
}

export default ApprovalTx;
