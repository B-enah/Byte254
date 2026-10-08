"use client";

import { useState } from "react";
import Carousel from "@/components/Carousel";
import {
  type Product,
  ProductFilters,
  ProductGrid,
  useProducts,
} from "@/features/product";

export default function ProductCatalogPage() {
  const [cartCount, setCartCount] = useState(0);

  const {
    products,
    featuredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    resetFilters,
    totalCount,
    filteredCount,
  } = useProducts();

  const handleAddToCart = (_product: Product) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div
      id="Product"
      className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-zinc-900">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
              <span>Catalog Showcase</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Featured Products & Devices
            </h1>
            <p className="text-zinc-400 text-sm mt-1">
              Showing {filteredCount} of {totalCount} genuine tech products in
              Nairobi
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => alert(`Your cart has ${cartCount} items`)}
              className="relative flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-xl border border-zinc-800 transition shadow-md"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
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
          <Carousel products={featuredProducts} />
        </div>

        {/* Search & Filter Control Bar */}
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={filteredCount}
        />

        {/* Product Cards Grid */}
        <ProductGrid
          products={products}
          onAddToCart={handleAddToCart}
          onResetFilters={resetFilters}
        />
      </div>
    </div>
  );
}
