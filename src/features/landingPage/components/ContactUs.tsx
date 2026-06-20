// src/app/features/landingPage/components/ContactUs.tsx

export default function ContactUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Contact <span className="text-blue-600">Byte254</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Have a question or need help picking the right device? We're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left - Contact Info */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: "📍",
                title: "Our Location",
                detail: "Nairobi CBD, Kenya",
              },
              {
                icon: "📞",
                title: "Phone",
                detail: "+254 700 000 000",
              },
              {
                icon: "✉️",
                title: "Email",
                detail: "hello@byte254.co.ke",
              },
              {
                icon: "🕐",
                title: "Working Hours",
                detail: "Monday – Saturday, 8am – 8pm",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm"
              >
                <p className="text-3xl">{item.icon}</p>
                <div>
                  <p className="text-gray-800 font-semibold">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex flex-col gap-5">

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Kamau"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+254 7XX XXX XXX"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Send Message
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}