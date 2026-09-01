"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-900 text-slate-600 dark:text-zinc-400 text-xs py-8 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-2 text-slate-900 dark:text-white">
              <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black text-sm shadow-xs">
                B
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                Byte<span className="bg-black dark:bg-white text-white dark:text-black text-xs font-black px-1.5 py-0.5 rounded ml-1">254</span>
              </span>
            </Link>
            <span className="hidden sm:inline text-slate-400 dark:text-zinc-600">|</span>
            <p className="hidden sm:block text-slate-500 dark:text-zinc-500 text-xs">
              Kenya's Verified Premium Tech Retailer
            </p>
          </div>

          {/* Right Copyright & Payment */}
          <div className="flex items-center gap-3 text-slate-500 dark:text-zinc-500 text-[11px]">
            <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-zinc-900 text-slate-800 dark:text-zinc-300 font-bold border border-slate-300 dark:border-zinc-800">
              M-PESA Express
            </span>
            <span>© {new Date().getFullYear()} Byte254</span>
          </div>

        </div>
      </div>
    </footer>
  );
}