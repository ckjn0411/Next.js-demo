// src/modules/charity/infrastructure/charityService.ts
import { ICharityOrgService, VerificationResult } from '../domain/types';

export const charityOrgService: ICharityOrgService = {
  verifyByBookingId: async (bookingId: string): Promise<VerificationResult> => {
    console.log(`[CHARITY_API] Đang đối soát mã booking: ${bookingId}...`);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const isFound = Math.random() > 0.3;

    if (isFound) {
      return {
        status: 'SUCCESS',
        message: 'Giao dịch đã khớp trên hệ thống thiện nguyện.',
        record: {
          transactionId: 'TXN_' + Math.floor(Math.random() * 100000),
          amount: 50000,
          message: `Booking ${bookingId}`,
          bookingRef: bookingId,
          timestamp: new Date().toISOString()
        }
      };
    }

    return {
      status: 'NOT_FOUND',
      message: 'Chưa tìm thấy giao dịch. Vui lòng kiểm tra lại nội dung chuyển khoản.'
    };
  }
};
