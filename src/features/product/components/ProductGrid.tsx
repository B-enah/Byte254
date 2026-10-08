"use client";

import type { Product } from "../types";
import { ProductCard } from "./ProductCard";

export interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  onResetFilters?: () => void;
}

export function ProductGrid({
  products,
  onAddToCart,
  onResetFilters,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-16 text-center">
        <div className="w-16 h-16 rounded-full bg-zinc-800 mx-auto flex items-center justify-center text-zinc-400 mb-4">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">
          No products match search criteria
        </h3>
        <p className="text-zinc-400 text-sm mb-4">
          Try clearing filter parameters or searching another keyword.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-xl bg-white text-black font-extrabold text-xs hover:bg-zinc-200 transition shadow-md"
          >
            Reset Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
