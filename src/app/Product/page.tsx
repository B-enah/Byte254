// app/products/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Carousel from "@/features/landingPage/components/carousel";

const products = [
  { id: 1, name: "MacBook Pro M3", price: 245000, category: "Laptops", image: "💻", slug: "macbook-pro-m3", rating: 4.8, featured: true, inStock: true },
  { id: 2, name: "Samsung Galaxy S24 Ultra", price: 189000, category: "Phones", image: "📱", slug: "samsung-s24-ultra", rating: 4.7, featured: true, inStock: true },
  { id: 3, name: "Sony WH-1000XM5", price: 38000, category: "Audio", image: "🎧", slug: "sony-wh-1000xm5", rating: 4.9, featured: true, inStock: true },
  { id: 4, name: "iPad Pro 12.9", price: 145000, category: "Tablets", image: "📟", slug: "ipad-pro-129", rating: 4.6, featured: false, inStock: false },
  { id: 5, name: "Dell XPS 15", price: 198000, category: "Laptops", image: "💻", slug: "dell-xps-15", rating: 4.5, featured: false, inStock: true },
  { id: 6, name: "iPhone 15 Pro Max", price: 210000, category: "Phones", image: "📱", slug: "iphone-15-pro-max", rating: 4.9, featured: true, inStock: true },
  { id: 7, name: "MacBook Air M2", price: 165000, category: "Laptops", image: "💻", slug: "macbook-air-m2", rating: 4.7, featured: false, inStock: true },
  { id: 8, name: "PS5 Console", price: 85000, category: "Gaming", image: "🎮", slug: "ps5-console", rating: 4.8, featured: false, inStock: true },
];

const categories = ["All", "Laptops", "Phones", "Audio", "Tablets", "Gaming"];

export default function ProductsPage() {
  const [cat, setCat] = useState("All");
  const [search, setSearch] = useState("");

  const featured = products.filter(p => p.featured);
  const filtered = products.filter(p => 
    (cat === "All" || p.category === cat) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-1">
              Our Collection
            </h1>
            <p className="text-gray-500 text-sm">
              {filtered.length} products available
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="relative bg-white px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
              <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <span>🛒</span> Cart
              </span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="mb-8">
          <Carousel products={featured} />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button 
                  key={c} 
                  onClick={() => setCat(c)} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${cat === c 
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
            
            <div className="relative md:ml-auto">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                className="w-full md:w-64 px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(p => (
              <Link key={p.id} href={`/products/${p.slug}`}>
                <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
                  {/* Image */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center h-52 group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-300">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                      {p.image}
                    </span>
                    {p.featured && (
                      <span className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-xs font-bold text-white px-2.5 py-1 rounded-full shadow-md">
                        ★ Featured
                      </span>
                    )}
                    {!p.inStock && (
                      <span className="absolute top-3 left-3 bg-red-500 text-xs font-bold text-white px-2.5 py-1 rounded-full shadow-md">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                      {p.category}
                    </span>
                    <h3 className="font-semibold text-gray-800 mt-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {p.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-1.5">
                      <span className="text-yellow-400 text-sm">
                        {"★".repeat(Math.round(p.rating))}
                      </span>
                      <span className="text-gray-400 text-xs">({p.rating})</span>
                    </div>

                    {/* Price & Stock */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xl font-bold text-blue-600">
                        KSh {p.price.toLocaleString()}
                      </span>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        p.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                        {p.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <button 
                      className={`w-full mt-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                        ${p.inStock 
                          ? "bg-blue-600 hover:bg-blue-700 text-white" 
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (p.inStock) {
                          alert(`Added ${p.name} to cart!`);
                        }
                      }}
                    >
                      {p.inStock ? "Add to Cart 🛒" : "Unavailable"}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm p-16 text-center">
            <div className="text-7xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => { setCat("All"); setSearch(""); }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
            >
              Clear filters
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}