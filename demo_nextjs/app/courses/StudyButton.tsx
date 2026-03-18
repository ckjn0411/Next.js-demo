'use client'; // Đánh dấu đây là Client Component

import { useState } from 'react';

/* 
  Client Component:
  - Có chỉ thị 'use client' ở đầu file.
  - Được gửi mã JavaScript xuống trình duyệt (Hydration).
  - Sử dụng được các hooks như useState, useEffect.
  - Dùng để xử lý các sự kiện tương tác của người dùng như Click, Change...
*/
export default function StudyButton({ courseName }: { courseName: string }) {
  const [isStudying, setIsStudying] = useState(false);

  const handleStudy = () => {
    setIsStudying(true);
    alert(`🎉 Bạn đã bắt đầu khóa học: ${courseName}!\nHãy cùng học và tạo ra giá trị cho cộng đồng.`);
  };

  return (
    <button
      onClick={handleStudy}
      disabled={isStudying}
      className={`mt-4 w-full py-3 rounded-xl font-bold transition-all shadow-md active:scale-95 ${
        isStudying 
          ? 'bg-slate-200 text-slate-500 cursor-not-allowed' 
          : 'bg-blue-primary text-white hover:bg-blue-dark shadow-blue-100'
      }`}
    >
      {isStudying ? 'Đang học...' : 'Bắt đầu học ngay'}
    </button>
  );
}
