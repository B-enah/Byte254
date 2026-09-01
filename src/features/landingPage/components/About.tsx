export default function About() {
  const stats = [
    { value: "50,000+", label: "Tech Products Shipped" },
    { value: "47", label: "Kenyan Counties Served" },
    { value: "99.4%", label: "Customer Satisfaction Rate" },
    { value: "100%", label: "Genuine Product Guarantee" },
  ];

  return (
    <section id="About" className="bg-black py-20 text-white relative overflow-hidden font-sans border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-black bg-white px-3.5 py-1 rounded-full">
              Our Vision & Promise
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-snug">
              Empowering Kenya with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                World-Class Tech Access
              </span>
            </h2>

            <p className="text-zinc-300 text-base leading-relaxed">
              Byte254 was founded with a singular purpose: to bridge the gap between global technological innovation and Kenyan tech enthusiasts, creators, and business professionals.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              We eliminate counterfeit risks, inflated prices, and unreliable shipping. Every laptop, smartphone, audio device, or gaming console in our catalog is rigorously verified, backed by warranty, and delivered straight to your doorstep.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Nairobi Headquarters</h4>
                  <p className="text-[11px] text-zinc-400">Hub for fast regional fulfillment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div 
                  key={stat.label} 
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    i === 0 
                      ? "bg-white text-black border-white" 
                      : "bg-zinc-900/80 text-white border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <p className={`text-3xl sm:text-4xl font-black ${i === 0 ? "text-black" : "text-white"}`}>
                    {stat.value}
                  </p>
                  <p className={`text-xs sm:text-sm font-bold mt-2 ${i === 0 ? "text-zinc-800" : "text-zinc-400"}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}