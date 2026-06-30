// src/features/landingPage/components/WhyUs.tsx
export default function WhyUs() {
  const features = [
    { icon: "💎", title: "Premium Quality", desc: "Curated selection of top-tier tech brands" },
    { icon: "⚡", title: "Lightning Fast", desc: "Same-day delivery in major cities" },
    { icon: "🔒", title: "Secure Shopping", desc: "Safe transactions with buyer protection" },
    { icon: "🌟", title: "Expert Support", desc: "24/7 tech support from certified experts" },
  ];

  return (
    <section id="WhyUs" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
        <p className="text-gray-500 mb-8">Experience the Byte254 difference</p>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}