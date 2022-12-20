import ApprovalTx from '../types/ApprovalTx';
import { IApprovalTx } from '../models/approvalTxModel';

export class TransactionManager {
  public parseTransaction(documentTx: IApprovalTx | null): ApprovalTx | null {
    if (documentTx === null) return null;
    const { company, approval, timestamp } = documentTx;
    const transaction = { company, approval, timestamp };
    return transaction as ApprovalTx;
  }

  public async create(
    company: String,
    approval: boolean,
    timestamp: String
  ): Promise<ApprovalTx> {
    const newTransaction = { company, approval, timestamp };
    return newTransaction;
  }
}
