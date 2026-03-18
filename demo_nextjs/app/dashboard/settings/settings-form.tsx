'use client';

import { useRouter } from 'next/navigation';

export default function SettingsForm() {
  const router = useRouter();

  const handleSave = () => {
    // Demo sử dụng useRouter() để điều hướng
    alert('Đã lưu! Tự động quay về Overview...');
    router.push('/dashboard');
  };

  return (
    <div className="space-y-4">
      <label className="block bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <span className="text-gray-700 dark:text-gray-200 block mb-2 font-medium">Username</span>
        <input 
          type="text" 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-black dark:text-white" 
          placeholder="Người dùng..."
        />
      </label>
      <button 
        onClick={handleSave} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Lưu & Quay lại Dashboard
      </button>
    </div>
  );
}
