// src/modules/charity/presentation/DonationChecker.tsx
'use client';

import React, { useState } from 'react';
import { useSyncDonationStatus } from '../application/useSyncDonationStatus';

export const DonationChecker = () => {
  const [bookingId, setBookingId] = useState('BOOKING_001');
  const { sync, isSyncing, result } = useSyncDonationStatus();

  const handleCheck = async () => {
    if (!bookingId) return;
    await sync(bookingId);
  };

  return (
    <div className="p-10 max-w-lg mx-auto bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Đối Soát Hệ Thống Charity
        </h2>
        <p className="text-gray-500 text-sm italic">
          Minh họa luồng đối soát tự động giữa hệ thống và đối tác từ thiện.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value.toUpperCase())}
          className="p-3 border rounded-lg outline-none font-mono tracking-wider"
          placeholder="MÃ BOOKING..."
        />

        <button
          onClick={handleCheck}
          disabled={isSyncing}
          className={`p-4 rounded-xl font-bold text-white transition-all ${
            isSyncing ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {isSyncing ? 'ĐANG ĐỐI SOÁT API...' : 'XÁC MINH NGAY'}
        </button>
      </div>

      {result && (
        <div className={`p-4 rounded-lg border-l-4 ${
            result.status === 'SUCCESS' ? 'bg-green-50 border-green-500' : 'bg-orange-50 border-orange-500'
        }`}>
          <h4 className="font-bold">{result.status === 'SUCCESS' ? '✓ THÀNH CÔNG' : '⚠ CHƯA KHỚP'}</h4>
          <p className="text-sm">{result.message}</p>
        </div>
      )}
    </div>
  );
};
