// src/features/landingPage/components/ContactUs.tsx
export default function ContactUs() {
  const contacts = [
    { icon: "📧", label: "Email", value: "info@byte254.co.ke" },
    { icon: "📞", label: "Phone", value: "+254 700 000 000" },
    { icon: "📍", label: "Location", value: "Nairobi, Kenya" },
  ];

  const socials = [
    { icon: "🐦", label: "Twitter", href: "#" },
    { icon: "📸", label: "Instagram", href: "#" },
    { icon: "💼", label: "LinkedIn", href: "#" },
  ];

  return (
    <section id="ContactUs" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Contact Us</h2>
        <p className="text-gray-500 mb-8">We'd love to hear from you</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {contacts.map((item) => (
            <div key={item.label} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <span className="text-3xl block mb-2">{item.icon}</span>
              <p className="font-semibold text-gray-800">{item.label}</p>
              <p className="text-gray-600 text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          {socials.map((item) => (
            <a key={item.label} href={item.href} className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition text-2xl">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}