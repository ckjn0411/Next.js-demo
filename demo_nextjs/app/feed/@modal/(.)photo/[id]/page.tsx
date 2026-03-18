'use client';

import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);

  const handleClose = () => {
    // Back về trước đó, giống như đóng modal
    router.back();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full relative">
        <button 
          onClick={handleClose} 
          className="absolute top-2 right-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center font-bold"
        >
          X
        </button>
        <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">🖼️ Modal Phóng To Ảnh (Intercepted)</h3>
        
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Bạn vừa mở ảnh ID: <strong className="text-blue-500 text-xl">{id}</strong>. 
          <br /><br />
          URL trên thanh địa chỉ đã đổi thành <code>/feed/photo/{id}</code>, nhưng nội dung layout/feed phía dưới vẫn còn y nguyên, không load lại!
        </p>
        
        <div className="p-8 text-center text-3xl font-extrabold text-blue-600 bg-blue-100 dark:bg-blue-900 rounded-xl mb-6 shadow-inner">
          Ảnh Mô Phỏng ({id})
        </div>
        
        <p className="text-sm text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-gray-700 p-2 rounded">
          <strong>Tips:</strong> Bấm X (hoặc Back) để trở về Feed. Nếu bạn thử bấm F5 bây giờ, route sẽ không còn bị đánh chặn và sẽ render ra trang Full.
        </p>
      </div>
    </div>
  );
}
