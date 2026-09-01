"use client";

import { useState } from "react";
import Link from "next/link";
import Carousel from "@/features/landingPage/components/carousel";

const products = [
  { 
    id: 1, 
    name: "MacBook Pro M3", 
    price: 245000, 
    category: "Laptops", 
    image: "/products/macbook-pro.png", 
    slug: "macbook-pro-m3", 
    rating: 4.8, 
    reviewsCount: 34,
    featured: true, 
    inStock: true 
  },
  { 
    id: 2, 
    name: "Samsung Galaxy S24 Ultra", 
    price: 189000, 
    category: "Phones", 
    image: "/products/samsung-s24.png", 
    slug: "samsung-s24-ultra", 
    rating: 4.7, 
    reviewsCount: 52,
    featured: true, 
    inStock: true 
  },
  { 
    id: 3, 
    name: "Sony WH-1000XM5 Headphones", 
    price: 38000, 
    category: "Audio", 
    image: "/products/sony-xm5.png", 
    slug: "sony-wh-1000xm5", 
    rating: 4.9, 
    reviewsCount: 88,
    featured: true, 
    inStock: true 
  },
  { 
    id: 4, 
    name: "iPhone 15 Pro Max Titanium", 
    price: 210000, 
    category: "Phones", 
    image: "/products/iphone-15.png", 
    slug: "iphone-15-pro-max", 
    rating: 4.9, 
    reviewsCount: 96,
    featured: true, 
    inStock: true 
  },
  { 
    id: 5, 
    name: "PlayStation 5 Console", 
    price: 85000, 
    category: "Gaming", 
    image: "/products/ps5-console.png", 
    slug: "ps5-console", 
    rating: 4.8, 
    reviewsCount: 41,
    featured: false, 
    inStock: true 
  },
  { 
    id: 6, 
    name: "Dell XPS 15 Touch Edition", 
    price: 198000, 
    category: "Laptops", 
    image: "/products/macbook-pro.png", 
    slug: "dell-xps-15", 
    rating: 4.5, 
    reviewsCount: 19,
    featured: false, 
    inStock: true 
  },
  { 
    id: 7, 
    name: "MacBook Air M2 Starlight", 
    price: 165000, 
    category: "Laptops", 
    image: "/products/macbook-pro.png", 
    slug: "macbook-air-m2", 
    rating: 4.7, 
    reviewsCount: 27,
    featured: false, 
    inStock: true 
  },
  { 
    id: 8, 
    name: "iPad Pro 12.9 M2 Chip", 
    price: 145000, 
    category: "Tablets", 
    image: "/products/iphone-15.png", 
    slug: "ipad-pro-129", 
    rating: 4.6, 
    reviewsCount: 15,
    featured: false, 
    inStock: false 
  },
];

const categories = ["All", "Laptops", "Phones", "Audio", "Tablets", "Gaming"];

export default function ProductsPage() {
  const [cat, setCat] = useState("All");
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const featured = products.filter(p => p.featured);
  const filtered = products.filter(p => 
    (cat === "All" || p.category === cat) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="Product" className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-zinc-900">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
              <span>Catalog Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Featured Products & Devices
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Showing {filtered.length} of {products.length} genuine tech products in Nairobi
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => alert(`Your cart has ${cartCount} items`)}
              className="relative flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-xl border border-zinc-800 transition shadow-md"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-sm font-bold">Cart</span>
              <span className="bg-white text-black text-xs font-black rounded-full px-2 py-0.5 ml-1">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Carousel Banner */}
        <div className="mb-10">
          <Carousel products={featured} />
        </div>

        {/* Search & Filter Control Bar */}
        <div className="bg-zinc-900/90 backdrop-blur-md rounded-2xl border border-zinc-800 p-4 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {categories.map(c => (
                <button 
                  key={c} 
                  onClick={() => setCat(c)} 
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                    cat === c 
                      ? "bg-white text-black shadow-md" 
                      : "bg-black text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <input 
                type="text" 
                placeholder="Search laptops, phones..." 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-2.5 pl-10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition"
              />
              <svg className="absolute left-3 top-3 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

          </div>
        </div>

        {/* Product Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(p => (
              <div 
                key={p.id}
                className="group relative flex flex-col bg-zinc-900/80 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                {/* Product Image Stage */}
                <div className="relative bg-zinc-950 p-6 flex items-center justify-center h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  />
                  
                  {p.featured && (
                    <span className="absolute top-3 right-3 bg-white text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      Featured
                    </span>
                  )}

                  {!p.inStock && (
                    <span className="absolute top-3 left-3 bg-zinc-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Card Details */}
                <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded">
                      {p.category}
                    </span>
                    
                    <h3 className="font-bold text-white text-base group-hover:text-zinc-300 transition-colors mt-2 line-clamp-1">
                      {p.name}
                    </h3>
                    
                    {/* SVG Rating Stars */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex items-center text-white">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(p.rating) ? "fill-current text-white" : "text-zinc-700"
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-zinc-400 text-xs font-semibold">
                        {p.rating} ({p.reviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Pricing & Stock Status */}
                  <div className="pt-3 border-t border-zinc-800">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-xs text-zinc-400">Kenyan Shillings</span>
                        <p className="text-xl font-black text-white">
                          KSh {p.price.toLocaleString()}
                        </p>
                      </div>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                        p.inStock ? "bg-zinc-800 text-white border border-zinc-700" : "bg-zinc-900 text-zinc-500 border border-zinc-800"
                      }`}>
                        {p.inStock ? "In Stock" : "Sold Out"}
                      </span>
                    </div>

                    {/* Add to Cart CTA */}
                    <button 
                      disabled={!p.inStock}
                      onClick={() => {
                        if (p.inStock) {
                          setCartCount(prev => prev + 1);
                        }
                      }}
                      className={`w-full py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all duration-200 ${
                        p.inStock 
                          ? "bg-white hover:bg-zinc-200 text-black shadow-md" 
                          : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span>{p.inStock ? "Add to Cart" : "Currently Unavailable"}</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-16 text-center">
            <div className="w-16 h-16 rounded-full bg-zinc-800 mx-auto flex items-center justify-center text-zinc-400 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">No products match search criteria</h3>
            <p className="text-zinc-400 text-sm mb-4">Try clearing filter parameters or searching another keyword.</p>
            <button 
              onClick={() => { setCat("All"); setSearch(""); }}
              className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-zinc-200 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}