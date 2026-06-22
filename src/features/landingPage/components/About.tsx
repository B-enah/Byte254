// src/features/landingPage/components/About.tsx

export default function About() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Who We Are
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            About <span className="text-blue-600">Byte254</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Kenya's trusted destination for laptops, phones, and premium electronics — delivered to all 47 counties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left - Stats */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: "🏪",
                title: "Who We Are",
                detail: "A Kenyan-born electronics store built to bring quality devices closer to everyday people.",
              },
              {
                icon: "🚚",
                title: "Nationwide Delivery",
                detail: "We deliver to all 47 counties — from Nairobi CBD to Kisumu, Mombasa, and beyond.",
              },
              {
                icon: "📱",
                title: "M-Pesa Payments",
                detail: "Pay easily and securely via M-Pesa. No card? No problem.",
              },
              {
                icon: "🛡️",
                title: "Our Promise",
                detail: "Every device is genuine, warranted, and backed by our customer support team.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 shadow-sm"
              >
                <p className="text-3xl">{item.icon}</p>
                <div>
                  <p className="text-gray-800 font-semibold">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Mission card */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm flex flex-col gap-6">

            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
                Our Mission
              </p>
              <p className="text-gray-800 text-lg font-bold leading-snug">
                Making quality technology accessible to every Kenyan.
              </p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                At Byte254, we believe that whether you're a student in Eldoret, a
                freelancer in Westlands, or a small business owner in Mombasa —
                you deserve access to genuine, affordable, high-performance devices
                without the hassle.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div>
              <p className="text-gray-800 font-semibold mb-3">Why Kenyans choose us</p>
              <div className="flex flex-col gap-3">
                {[
                  "Genuine products with warranty",
                  "M-Pesa & card payments accepted",
                  "Delivery to all 47 counties",
                  "Dedicated after-sales support",
                  "Competitive Kenyan market pricing",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <p className="text-gray-600 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { stat: "47", label: "Counties Covered" },
                { stat: "500+", label: "Products" },
                { stat: "24/7", label: "Support" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-blue-600 text-2xl font-bold">{item.stat}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}