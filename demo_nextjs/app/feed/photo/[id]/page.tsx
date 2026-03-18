import Link from 'next/link';

export default async function PhotoFullPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-blue-50 dark:bg-blue-900 rounded-lg text-center shadow-lg border-4 border-blue-400 mt-10">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-800 dark:text-blue-100">
        🌍 Trạng Thái Render Toàn Trang (Full Page)
      </h2>
      <p className="mb-6 text-lg">
        Bạn đang xem ảnh ID: <strong className="text-2xl text-red-500">{id}</strong>. 
        <br />
        Bạn có thể thấy trang danh sách <strong>Feed</strong> phía sau không còn nữa vì bạn 
        đội ngũ vào thẳng (Refresh/Truy cập URL). Intercept Route đã bị bỏ qua, và chạy file <code>/feed/photo/[id]/page.tsx</code>.
      </p>

      <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-xl flex items-center justify-center font-bold text-gray-500 dark:text-gray-400 text-2xl mb-8">
        Ảnh Full Kích Cỡ
      </div>

      <Link 
        href="/feed" 
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-transform hover:scale-105"
      >
        Quay lại Trang Feed Chính
      </Link>
    </div>
  );
}
