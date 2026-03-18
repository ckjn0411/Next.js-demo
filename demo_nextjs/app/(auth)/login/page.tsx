'use client'; // Đánh dấu Client Component vì có Form Handling (trạng thái, sụ kiện Submit)

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Giả lập xử lý đăng nhập
    setTimeout(() => {
      setIsLoading(false);
      alert('Đăng nhập thành công với tài khoản: ' + email);
      router.push('/courses');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-mint-light/30 flex items-center justify-center p-6 bg-gradient-to-br from-mint-light via-white to-blue-50">
      <div className="w-full max-w-md bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-mint-dark/10 border border-slate-100 animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mint-primary to-blue-primary"></div>
        
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-black text-slate-800 tracking-tight">Chào mừng 👋</h2>
          <p className="text-slate-500 font-medium">Bắt đầu hành trình học tập vì cộng đồng cùng HocTuThien.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 pl-4 uppercase tracking-widest">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-5 bg-slate-50 border-2 border-transparent focus:border-mint-primary focus:bg-white rounded-2xl outline-none transition-all font-medium text-slate-800"
              placeholder="ten@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 pl-4 uppercase tracking-widest">Mật khẩu</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-5 bg-slate-50 border-2 border-transparent focus:border-mint-primary focus:bg-white rounded-2xl outline-none transition-all font-medium text-slate-800"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-mint-dark transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:scale-100 disabled:cursor-wait"
          >
            {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
          </button>
        </form>

        <div className="mt-10 text-center text-sm font-medium text-slate-400 flex flex-col gap-4">
          <p>Chưa có tài khoản? <Link href="#" className="text-blue-primary font-bold hover:underline">Đăng ký ngay</Link></p>
          <p className="text-xs opacity-60">Đây là bản demo cho các khái niệm Next.js App Router.</p>
        </div>
      </div>
    </div>
  );
}
