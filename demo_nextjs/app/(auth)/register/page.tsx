import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-2">Đăng Ký Tài Khoản</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Tương tự, nhìn lên URL: Hiện tại đang ở <strong><code>/register</code></strong>. Chúng ta vẫn được thừa hưởng khung viền màu tím của <code>(auth)/layout.tsx</code>.
      </p>
      
      <div className="flex flex-col gap-4 mt-6">
        <input type="text" placeholder="Họ và Tên" className="p-2 border rounded max-w-sm text-black" />
        <input type="email" placeholder="Email" className="p-2 border rounded max-w-sm text-black" />
        <button className="bg-green-600 text-white px-4 py-2 rounded max-w-sm font-bold hover:bg-green-700">
          Hoàn Thành Đăng Ký
        </button>
      </div>

      <div className="mt-6 border-t pt-4">
        Đã có tài khoản?{' '}
        <Link href="/login" className="text-purple-500 hover:text-purple-700 underline font-semibold">
          Quay lại trang Đăng Nhập
        </Link>
      </div>
    </div>
  );
}
