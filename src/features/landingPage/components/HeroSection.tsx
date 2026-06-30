// src/features/landingPage/components/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

        {/* Left - Text */}
        <div className="flex-1">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            New Arrivals 🔥
          </p>
          <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-800">
            Premium Tech. <br />
            <span className="text-blue-600">Kenyan Prices.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Shop the latest laptops, smartphones, and electronics.
            Genuine products, fast delivery across all 47 counties,
            and M-Pesa payments accepted.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            {[
              { icon: "✅", label: "100% Genuine" },
              { icon: "🚚", label: "Fast Delivery" },
              { icon: "📱", label: "M-Pesa Accepted" },
              { icon: "🛡️", label: "Warranted" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 shadow-sm"
              >
                <span>{badge.icon}</span>
                <span className="text-sm text-gray-600 font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Feature Cards */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Laptops", desc: "MacBook, Dell, HP & more", icon: "💻", bg: "bg-blue-600" },
              { label: "Smartphones", desc: "iPhone, Samsung, Pixel", icon: "📱", bg: "bg-indigo-600" },
              { label: "Accessories", desc: "Cables, Cases, Chargers", icon: "🎧", bg: "bg-violet-600" },
              { label: "Gaming", desc: "Controllers, Headsets", icon: "🎮", bg: "bg-purple-600" },
            ].map((item) => (
              <Link href="Products" key={item.label}>
                <div
                  className={`${item.bg} rounded-xl p-6 cursor-pointer hover:opacity-90 transition-opacity shadow-sm hover:scale-105 transform transition-transform duration-200`}
                >
                  <p className="text-3xl mb-3">{item.icon}</p>
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-6 text-center">
            <Link href="/Product">
              <button className="group flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-200">
                <span>View More Categories</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}