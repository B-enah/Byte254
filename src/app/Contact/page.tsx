"use client";

import Link from "next/link";
import ContactUs from "@/features/landingPage/components/ContactUs";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-200 dark:border-zinc-800">
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center text-slate-500 dark:text-zinc-400 hover:text-black dark:hover:text-white text-xs font-bold uppercase tracking-wider mb-2 transition"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Contact Byte254 Support
            </h1>
            <p className="text-slate-500 dark:text-zinc-400 text-base mt-1 max-w-2xl">
              Fill out the form below to reach our dedicated sales and customer care team in Nairobi.
            </p>
          </div>

          <Link
            href="/Product"
            className="px-6 py-3 rounded-xl bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-black font-extrabold text-sm shadow-md transition"
          >
            Explore Product Catalog
          </Link>
        </div>

        {/* Contact Form Component */}
        <ContactUs />

      </div>
    </div>
  );
}
