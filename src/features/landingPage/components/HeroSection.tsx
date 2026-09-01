import Link from 'next/link';

export default function HeroSection() {
  const trustBadges = [
    {
      title: "100% Genuine",
      subtitle: "Official Brand Warranty",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Fast Delivery",
      subtitle: "All 47 Counties in Kenya",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "M-Pesa Express",
      subtitle: "Instant & Secure Checkout",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "24/7 Tech Support",
      subtitle: "Local Kenyan Help Center",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const categories = [
    { 
      label: "Laptops & Mac", 
      desc: "MacBook, Dell XPS & HP Spectre", 
      image: "/products/macbook-pro.png", 
      count: "28 Models available"
    },
    { 
      label: "Smartphones", 
      desc: "iPhone 15 Pro, Samsung S24 & Pixel", 
      image: "/products/samsung-s24.png", 
      count: "42 Models available"
    },
    { 
      label: "Audio & Acoustics", 
      desc: "Sony XM5, AirPods & Bose QuietComfort", 
      image: "/products/sony-xm5.png", 
      count: "19 Headphones available"
    },
    { 
      label: "Gaming & Consoles", 
      desc: "PlayStation 5, Xbox & DualSense", 
      image: "/products/ps5-console.png", 
      count: "15 Consoles & Gear"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white pt-12 pb-20 border-b border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Tag */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Kenya's Verified Premium Tech Retailer
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              Premium Tech. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Unbeatable Kenyan Prices.
              </span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover flagship laptops, smartphones, and audio gear with official brand warranties, instant M-Pesa payments, and guaranteed countrywide delivery.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                href="/Product" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold shadow-md transition-all duration-200 text-center"
              >
                Shop Full Collection
              </Link>
              <Link 
                href="/WhyUs" 
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold border border-zinc-800 transition-all duration-200 text-center"
              >
                Why Byte254?
              </Link>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-900">
              {trustBadges.map((badge) => (
                <div 
                  key={badge.title} 
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition duration-200 text-left"
                >
                  <div className="p-1.5 w-fit rounded-lg bg-zinc-900 mb-2">
                    {badge.icon}
                  </div>
                  <h4 className="text-xs font-bold text-white">{badge.title}</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-tight">{badge.subtitle}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Product Cards Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((item) => (
                <Link key={item.label} href="/Product" className="group">
                  <div className="relative overflow-hidden rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 shadow-xl">
                    <div className="relative z-10 flex flex-col justify-between h-44">
                      <div>
                        <span className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase">
                          {item.count}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors mt-0.5">
                          {item.label}
                        </h3>
                        <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                          {item.desc}
                        </p>
                      </div>

                      <div className="relative h-20 w-full mt-2 flex items-center justify-end overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.label}
                          className="h-20 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Showcase Strip */}
            <div className="mt-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Daily Tech Deals Available</h4>
                  <p className="text-[11px] text-zinc-400">Up to 25% off selected MacBooks & Galaxy devices</p>
                </div>
              </div>

              <Link href="/Product" className="text-xs font-bold text-white hover:text-zinc-300 flex items-center gap-1">
                Explore
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
