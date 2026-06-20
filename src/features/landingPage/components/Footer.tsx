// src/app/features/landingPage/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-3">Byte254</h2>
            <p className="text-sm leading-relaxed">
              Kenya's home for premium electronics, laptops, and high-end smartphones.
              Genuine products. Fast delivery. M-Pesa friendly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Home</li>
              <li className="hover:text-white cursor-pointer transition-colors">Shop</li>
              <li className="hover:text-white cursor-pointer transition-colors">Deals</li>
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Laptops</li>
              <li className="hover:text-white cursor-pointer transition-colors">Smartphones</li>
              <li className="hover:text-white cursor-pointer transition-colors">Accessories</li>
              <li className="hover:text-white cursor-pointer transition-colors">Networking</li>
              <li className="hover:text-white cursor-pointer transition-colors">Gaming</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Nairobi, Kenya</li>
              <li>📞 +254 700 000 000</li>
              <li>✉️ hello@byte254.co.ke</li>
              <li>🕐 Mon - Sat, 8am - 8pm</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} Byte254. All rights reserved.
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-3 text-sm">
            <span>We accept:</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-white">M-Pesa</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-white">Visa</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-white">Mastercard</span>
          </div>

        </div>

      </div>
    </footer>
  )
}