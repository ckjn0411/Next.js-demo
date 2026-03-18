export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500 to-fuchsia-400 rounded-3xl blur-md opacity-20 animate-pulse"></div>
        <div className="relative w-24 h-24 bg-white rounded-3xl shadow-lg border border-slate-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 text-indigo-600"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      <div className="space-y-6 max-w-lg">
        <h1 className="text-4xl sm:text-6xl font-[800] tracking-tight bg-gradient-to-r from-indigo-700 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent !leading-tight font-outfit">
          Your Project, <br />
          Beautifully Cleared.
        </h1>
        <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed tracking-wide">
          Giao diện đã được dọn dẹp gọn gàng và nâng cấp thẩm mỹ. Đây là điểm
          khởi đầu lý tưởng để bạn hiện thực hóa ý tưởng.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto pt-4 shadow-slate-200/50">
        <button className="group relative w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-slate-900 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.03] shadow-xl shadow-indigo-200 active:scale-95 flex items-center justify-center gap-3">
          Khởi chạy ngay
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center">
          Tài liệu hướng dẫn
        </button>
      </div>

      <footer className="pt-8 border-t border-slate-100 flex items-center gap-8 justify-center grayscale opacity-60">
        <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
          Built with Next.js • TailwindCSS • Modern Design
        </span>
      </footer>
    </div>
  );
}
