// src/modules/charity/application/useSyncDonationStatus.ts
import { useState } from 'react';
import { charityOrgService } from '../infrastructure/charityService';
import { VerificationResult } from '../domain/types';

export const useSyncDonationStatus = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);

  const sync = async (bookingId: string) => {
    setIsSyncing(true);
    setResult(null);

    try {
      const verification = await charityOrgService.verifyByBookingId(bookingId);
      setResult(verification);
      return verification;
    } catch (error) {
      setResult({ status: 'FAILED', message: "Hệ thống đối soát đang bận." });
    } finally {
      setIsSyncing(false);
    }
  };

  return { sync, isSyncing, result };
};
