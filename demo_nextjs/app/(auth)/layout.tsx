export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-4 border-purple-500 p-8 m-4 rounded-xl outline-dashed outline-2 outline-purple-200">
      <h2 className="text-xl font-bold text-purple-600 mb-4 bg-purple-100 dark:bg-purple-900 inline-block p-2 rounded">
        🔒 5. Route Group - (auth) Layout
      </h2>
      <p className="mb-6 text-sm text-gray-700 dark:text-gray-300">
        Layout này nằm gọn trong thư mục <code>app/(auth)</code>. Tính năng của <strong>Route Group</strong> (viết thư mục có ngoặc đơn <code>()</code>) là giúp bạn nhóm các Route chia sẻ Layout mà <strong>KHÔNG làm thay đổi đường dẫn URL</strong> trên trình duyệt. Rất thích hợp để gom toàn bộ các trang Đăng Nhập / Đăng Ký lại.
      </p>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        {children}
      </div>
    </div>
  );
}
