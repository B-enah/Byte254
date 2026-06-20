// src/app/features/landingPage/components/Hero.tsx

export default function Hero() {
    return (
        <section className="bg-gray-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

                {/* Left - Text */}
                <div className="flex-1">
                    <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
                        New Arrivals 🔥
                    </p>
                    <h1 className="text-5xl font-bold leading-tight mb-6">
                        Premium Tech. <br />
                        <span className="text-blue-400">Kenyan Prices.</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Shop the latest laptops, smartphones, and electronics.
                        Genuine products, fast delivery across all 47 counties,
                        and M-Pesa payments accepted.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            Shop Now
                        </button>
                        <button className="border border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            View Deals
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center gap-6 mt-10 text-sm text-gray-400">
                        <span>✅ 100% Genuine</span>
                        <span>🚚 Fast Delivery</span>
                        <span>📱 M-Pesa Accepted</span>
                    </div>
                </div>

                {/* Right - Feature Cards */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                    {[
                        { label: "Laptops", desc: "MacBook, Dell, HP & more", icon: "💻", bg: "bg-blue-600" },
                        { label: "Smartphones", desc: "iPhone, Samsung, Pixel", icon: "📱", bg: "bg-indigo-600" },
                        { label: "Accessories", desc: "Cables, Cases, Chargers", icon: "🎧", bg: "bg-violet-600" },
                        { label: "Gaming", desc: "Controllers, Headsets", icon: "🎮", bg: "bg-purple-600" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className={`${item.bg} rounded-xl p-6 cursor-pointer hover:opacity-90 transition-opacity`}
                        >
                            <p className="text-3xl mb-3">{item.icon}</p>
                            <p className="font-semibold text-white">{item.label}</p>
                            <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}