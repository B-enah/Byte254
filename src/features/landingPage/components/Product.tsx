// src/features/landingPage/components/Product.tsx

const products = [
  { id: 1, name: "MacBook Pro M3", price: 245000, category: "Laptops", image: "💻" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", price: 189000, category: "Phones", image: "📱" },
  { id: 3, name: "Sony WH-1000XM5", price: 38000, category: "Audio", image: "🎧" },
  { id: 4, name: 'iPad Pro 12.9"', price: 145000, category: "Tablets", image: "📟" },
  { id: 5, name: "Dell XPS 15", price: 198000, category: "Laptops", image: "💻" },
  { id: 6, name: "iPhone 15 Pro Max", price: 210000, category: "Phones", image: "📱" },
];

export default function Product() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Showing {products.length} genuine products — all available for M-Pesa checkout.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl text-center bg-gray-50 rounded-xl py-6">
                {product.image}
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                {product.category}
              </span>
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-xl font-bold text-gray-900">
                KSh {product.price.toLocaleString()}
              </p>
              <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}