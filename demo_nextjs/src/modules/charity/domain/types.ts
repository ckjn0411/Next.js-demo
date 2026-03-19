// src/modules/charity/domain/types.ts

export type TransactionStatus = 'SUCCESS' | 'PENDING' | 'FAILED' | 'NOT_FOUND';

export interface DonationRecord {
  transactionId: string;
  amount: number;
  message: string;
  bookingRef: string;
  timestamp: string;
}

export interface VerificationResult {
  status: TransactionStatus;
  record?: DonationRecord;
  message: string;
}

export interface ICharityOrgService {
  verifyByBookingId(bookingId: string): Promise<VerificationResult>;
}
