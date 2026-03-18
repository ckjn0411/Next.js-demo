import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next.js Routing Demo',
  description: 'Demo for Next.js App Router',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        {/* Navigation chung cho toàn ứng dụng */}
        <nav className="bg-gray-900 text-white p-4">
          <div className="max-w-4xl mx-auto flex gap-6 flex-wrap">
            <Link href="/" className="hover:text-blue-400 font-bold">1. Home</Link>
            <Link href="/dashboard" className="hover:text-blue-400 font-bold">2. Dashboard</Link>
            <Link href="/product/1" className="hover:text-blue-400 font-bold">3. Product (Dynamic)</Link>
            <Link href="/feed" className="hover:text-blue-400 font-bold">4. Feed (Parallel & Intercept)</Link>
            <Link href="/login" className="hover:text-purple-400 font-bold text-purple-300">5. Route Group (Auth)</Link>
          </div>
        </nav>
        
        {/* Nội dung chính của các page sẽ được render ở đây */}
        <main className="flex-1 max-w-4xl mx-auto w-full p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
