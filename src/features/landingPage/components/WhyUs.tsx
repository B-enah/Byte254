// src/app/features/landingPage/components/WhyUs.tsx

export default function WhyUs() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Why Shop at <span className="text-blue-600">Byte254?</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We're not just another online shop. Here's what makes us different.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "✅",
              title: "100% Genuine Products",
              desc: "Every product is sourced directly from verified distributors and manufacturers. No counterfeits, ever.",
            },
            {
              icon: "📱",
              title: "M-Pesa Payments",
              desc: "Pay easily with M-Pesa, Visa, or Mastercard. Checkout is fast, secure, and Kenyan-friendly.",
            },
            {
              icon: "🚚",
              title: "Nationwide Delivery",
              desc: "We deliver to all 47 counties. Fast, reliable, and trackable from checkout to your doorstep.",
            },
            {
              icon: "🔧",
              title: "After-Sales Support",
              desc: "Our tech support team is available Mon–Sat to help with setup, warranty, and repairs.",
            },
            {
              icon: "💰",
              title: "Best Prices Guaranteed",
              desc: "Find a lower price elsewhere? We'll match it. Premium tech doesn't have to break the bank.",
            },
            {
              icon: "🔒",
              title: "Secure Shopping",
              desc: "Your data and payments are fully encrypted and protected. Shop with complete peace of mind.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <p className="text-4xl mb-4">{item.icon}</p>
              <h3 className="text-gray-800 font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}