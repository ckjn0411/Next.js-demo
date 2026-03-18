import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../src/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HocTuThien - Học Để Sẻ Chia',
  description: 'Nền tảng Mentoring kết hợp Thiện nguyện minh bạch.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <footer className="footer-gradient py-12 px-6 bg-slate-100 text-center text-slate-500">
          <p>© 2026 HocTuThien. Được tạo bởi NghiaDPTWork.</p>
        </footer>
      </body>
    </html>
  );
}
