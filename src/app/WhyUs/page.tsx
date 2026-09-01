"use client";

import Link from "next/link";
import WhyUs from "@/features/landingPage/components/WhyUs";

export default function WhyUsPage() {
  const deepFeatures = [
    {
      title: "100% Brand Warranted",
      desc: "Every Apple, Samsung, Sony, and Dell device sold on Byte254 comes with verifiable manufacturer serial numbers and 1-year local warranty coverage.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Countrywide Express Shipping",
      desc: "Same-day delivery in Nairobi CBD & metropolitan areas. Reliable 24-48 hr parcel shipping via trusted logistics partners to all 47 counties in Kenya.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Instant M-Pesa Integration",
      desc: "Pay seamlessly with M-Pesa Express directly from your phone. Zero hidden transaction fees, instant payment confirmation, and automated receipting.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Dedicated Kenyan Tech Support",
      desc: "Our technical team in Nairobi provides hardware diagnostics, software setup assistance, and prompt customer care 7 days a week.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

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
              Why Choose Byte254
            </h1>
            <p className="text-zinc-400 text-base mt-1 max-w-2xl">
              Discover how we are setting the benchmark for tech retail in Kenya through genuine products, transparent pricing, and rapid delivery.
            </p>
          </div>

          <Link
            href="/Product"
            className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold text-sm shadow-md transition"
          >
            Explore Product Catalog
          </Link>
        </div>

        {/* Feature Component */}
        <WhyUs />

        {/* In-Depth Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {deepFeatures.map((feat) => (
            <div 
              key={feat.title}
              className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{feat.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Ready to Upgrade Your Tech Setup?</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Browse our wide selection of MacBooks, iPhones, Samsung flagships, and PlayStation consoles with M-Pesa checkout.
          </p>
          <div className="pt-2">
            <Link
              href="/Product"
              className="inline-block px-8 py-3.5 rounded-xl bg-white text-black font-extrabold text-sm shadow-md hover:bg-zinc-200 transition-transform"
            >
              Start Shopping Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
