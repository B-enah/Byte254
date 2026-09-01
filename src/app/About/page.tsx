"use client";

import Link from "next/link";
import About from "@/features/landingPage/components/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-zinc-800">
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-wider mb-2 transition"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              About Byte254 Kenya
            </h1>
            <p className="text-zinc-400 text-base mt-1 max-w-2xl">
              Connecting Kenya to genuine, high-performance technology with transparency and local service excellence.
            </p>
          </div>

          <Link
            href="/Product"
            className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-sm shadow-md transition"
          >
            Explore Product Catalog
          </Link>
        </div>

        {/* Main About Component */}
        <About />

      </div>
    </div>
  );
}
