// src/app/charity/check/page.tsx
import React from 'react';
import { DonationChecker } from '@/modules/charity/presentation/DonationChecker';

export default function CheckDonationPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="flex flex-col gap-10">
        <DonationChecker />
        
        <div className="p-6 bg-indigo-900 text-white rounded-2xl shadow-xl max-w-lg border-l-8 border-indigo-400">
           <h3 className="text-xl font-bold mb-2">⭐ KIẾN TRÚC DEMO</h3>
           <p className="text-sm opacity-90 italic mb-4">"Lõi nghiệp vụ không phụ thuộc vào UI hay Framework"</p>
           <ul className="list-disc list-inside space-y-2 text-indigo-100 text-sm">
             <li><b>Domain:</b> Hợp đồng nghiệp vụ (Types/Interfaces).</li>
             <li><b>Infrastructure:</b> Thực thi kết nối API ngoài.</li>
             <li><b>Application:</b> Hook điều phối (Use Case).</li>
             <li><b>Presentation:</b> UI Component sạch sẽ.</li>
           </ul>
        </div>
      </div>
    </main>
  );
}
