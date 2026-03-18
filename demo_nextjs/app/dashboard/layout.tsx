import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden min-h-[400px]">
      {/* Sidebar riêng cho Dashboard */}
      <aside className="w-64 bg-gray-50 dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">2. Dashboard</h2>
        <ul className="space-y-4">
          <li>
            {/* Sử dụng <Link> để điều hướng nhanh, tự prefetch */}
            <Link href="/dashboard" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800">
              ➔ Tổng quan (Overview)
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800">
              ➔ Cài đặt (Settings)
            </Link>
          </li>
        </ul>
        <div className="mt-8 p-4 bg-yellow-100 text-yellow-800 text-sm rounded">
          <strong>Lưu ý:</strong> Sidebar này nằm trong <code>layout.tsx</code>, nó <em>không bị re-render</em> khi bạn bấm đổi trang bên phải.
        </div>
      </aside>

      {/* Nội dung thay đổi (tương ứng với page.tsx) */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}
