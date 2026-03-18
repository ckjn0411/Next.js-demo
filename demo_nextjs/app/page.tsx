import Link from 'next/link';
import Image from 'next/image';

/* 
  Server Component:
  - Mặc định các components trong Next.js App Router là Server Components.
  - Không gửi JS xuống trình duyệt, render nhanh và tốt cho SEO.
  - Phù hợp cho Landing Page, Meta data và các thành phần không cần tương tác động.
*/
export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-mint-light rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <section className="relative px-6 py-24 mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <span className="px-4 py-2 rounded-full bg-mint-light text-mint-dark font-semibold text-sm">
            🚀 Dự án vì cộng đồng 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Học Để Sẻ Chia, <br /> 
            <span className="bg-gradient-to-r from-mint-dark to-blue-primary bg-clip-text text-transparent">Nâng Tầm Tri Thức.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Nền tảng Mentoring 1:1 chuyên nghiệp, nơi mỗi buổi học không chỉ là sự tiến bộ của bạn mà còn là một khoản quyên góp thiện nguyện ý nghĩa.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="/courses" 
              className="px-8 py-4 bg-mint-dark text-white rounded-xl font-bold shadow-lg shadow-mint-light/50 hover:bg-black transition-all transform hover:-translate-y-1"
            >
              Xem các khóa học
            </Link>
            <Link 
              href="/login" 
              className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all hover:border-mint-dark hover:text-mint-dark"
            >
              Bắt đầu ngay
            </Link>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                  U{i}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-mint-primary flex items-center justify-center text-xs font-bold text-white">
                +1K
              </div>
            </div>
            <span>Tham gia cùng hàng nghìn học viên và mentor tâm huyết.</span>
          </div>
        </div>
        
        <div className="flex-1 relative">
           <div className="absolute inset-0 bg-mint-primary rounded-[2rem] transform rotate-3 -z-10 opacity-20"></div>
           <div className="relative bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col gap-6">
              <div className="space-y-4">
                 <div className="h-4 w-3/4 bg-slate-100 rounded-lg"></div>
                 <div className="h-4 w-1/2 bg-slate-100 rounded-lg"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-mint-light rounded-2xl flex items-center justify-center font-bold text-mint-dark">Mentoring</div>
                  <div className="h-24 bg-blue-50 rounded-2xl flex items-center justify-center font-bold text-blue-primary">Charity</div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
