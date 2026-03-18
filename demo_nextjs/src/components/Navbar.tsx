import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4 flex justify-between items-center bg-mint-light/80 backdrop-blur-md">
      <div className="text-2xl font-bold bg-gradient-to-r from-mint-dark to-blue-dark bg-clip-text text-transparent">
        HocTuThien
      </div>
      <div className="flex gap-8 font-medium items-center">
        <Link href="/" className="hover:text-mint-dark transition-colors">Trang chủ</Link>
        <Link href="/courses" className="hover:text-mint-dark transition-colors">Khóa học</Link>
        <Link href="/login" className="px-5 py-2 bg-blue-primary text-white rounded-full hover:bg-blue-dark transition-all transform hover:scale-105">
          Đăng nhập
        </Link>
      </div>
    </nav>
  );
}
