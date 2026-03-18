import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Next.js Sparkle Demo",
  description: "A beautifully styled Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-[#f8fafc] text-slate-900 antialiased min-h-screen relative overflow-hidden font-sans">
        {/* Background Decorations */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/40 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-200/40 rounded-full blur-[120px] -z-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <main className="min-h-screen flex items-center justify-center p-6 sm:p-12">
          <div className="relative group w-full max-w-3xl">
            {/* Glass effect container backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-white/80 backdrop-blur-2xl px-10 py-16 sm:px-16 sm:py-20 rounded-[2.2rem] shadow-2xl ring-1 ring-slate-200/50">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
