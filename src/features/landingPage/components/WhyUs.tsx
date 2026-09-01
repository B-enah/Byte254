export default function WhyUs() {
  const features = [
    {
      title: "100% Genuine Tech",
      desc: "Curated directly from verified global manufacturers with official brand warranties.",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Lightning Express Delivery",
      desc: "Same-day dispatch in Nairobi area, fast 24-48 hr shipping to all 47 counties.",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Instant M-Pesa & Security",
      desc: "Encrypted checkout with M-Pesa Express integration and full buyer protection.",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "24/7 Expert Support",
      desc: "Dedicated tech specialists ready to assist with product setup and warranty claims.",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
  ];

  return (
    <section id="WhyUs" className="bg-black text-white py-20 border-t border-b border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-black bg-white px-3.5 py-1 rounded-full">
            The Byte254 Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Why Kenya Trusts Byte254
          </h2>
          <p className="text-zinc-400 text-base">
            We eliminate tech purchasing risks with guaranteed authenticity, transparent pricing, and nationwide support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div 
              key={item.title} 
              className="group relative bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}