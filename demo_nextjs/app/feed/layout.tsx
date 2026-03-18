export default function FeedLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="relative border-2 border-dashed border-gray-400 p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4 bg-yellow-100 text-yellow-800 inline-block p-1">4. Parallel & Intercepting Routes</h2>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        Demo hiển thị list ảnh (Feed). Bấm vào 1 ảnh, Modal sẽ phóng to đè lên trên trang này nhưng URL <strong>vẫn được cập nhật</strong>. Nếu copy URL đó dán mở tab mới hoặc Refresh, toàn bộ trang chi tiết ảnh sẽ hiện ra.
      </p>

      {/* Trang /feed chính */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner">
        {children}
      </div>

      {/* Slot hiển thị modal (Intercepting) */}
      {modal}
    </div>
  );
}
