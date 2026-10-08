"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "../types";

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;

    if (onAddToCart) {
      onAddToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group relative flex flex-col bg-zinc-900/80 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 shadow-lg hover:-translate-y-1">
      {/* Product Image Stage */}
      <Link
        href={`/Product/${product.slug}`}
        className="relative bg-zinc-950 p-6 flex items-center justify-center h-56 overflow-hidden block"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
        />

        {product.featured && (
          <span className="absolute top-3 right-3 bg-white text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
            Featured
          </span>
        )}

        {!product.inStock && (
          <span className="absolute top-3 left-3 bg-zinc-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
            Out of Stock
          </span>
        )}
      </Link>

      {/* Card Details */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded">
            {product.category}
          </span>

          <Link
            href={`/Product/${product.slug}`}
            className="block group-hover:text-zinc-300"
          >
            <h3 className="font-bold text-white text-base transition-colors mt-2 line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* SVG Rating Stars */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-white">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={`star-${product.id}-${i + 1}`}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? "fill-current text-white"
                      : "text-zinc-700"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-zinc-400 text-xs font-semibold">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Pricing & Stock Status */}
        <div className="pt-3 border-t border-zinc-800">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-xs text-zinc-400">Kenyan Shillings</span>
              <p className="text-xl font-black text-white">
                KSh {product.price.toLocaleString()}
              </p>
            </div>
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                product.inStock
                  ? "bg-zinc-800 text-white border border-zinc-700"
                  : "bg-zinc-900 text-zinc-500 border border-zinc-800"
              }`}
            >
              {product.inStock ? "In Stock" : "Sold Out"}
            </span>
          </div>

          {/* Add to Cart CTA */}
          <button
            type="button"
            disabled={!product.inStock}
            onClick={handleAddToCart}
            className={`w-full py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all duration-200 ${
              !product.inStock
                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                : added
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white hover:bg-zinc-200 text-black shadow-md"
            }`}
          >
            {added ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Added to Cart!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>
                  {product.inStock ? "Add to Cart" : "Currently Unavailable"}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
