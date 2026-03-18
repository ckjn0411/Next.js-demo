import Link from 'next/link';

export default function LoginPage() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-2">Đăng Nhập</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Hãy để ý URL trên trình duyệt: Nó chỉ là <strong><code>/login</code></strong> chứ không phải là <code>/(auth)/login</code> hay <code>/auth/login</code>.
      </p>
      
      <div className="flex flex-col gap-4 mt-6">
        <input type="text" placeholder="Tên đăng nhập" className="p-2 border rounded max-w-sm text-black" />
        <input type="password" placeholder="Mật khẩu" className="p-2 border rounded max-w-sm text-black" />
        <button className="bg-purple-600 text-white px-4 py-2 rounded max-w-sm font-bold hover:bg-purple-700">
          Vào Trang Trong
        </button>
      </div>

      <div className="mt-6 border-t pt-4">
        Chưa có tài khoản?{' '}
        <Link href="/register" className="text-purple-500 hover:text-purple-700 underline font-semibold">
          Chuyển sang trang Đăng Ký
        </Link>
      </div>
    </div>
  );
}
