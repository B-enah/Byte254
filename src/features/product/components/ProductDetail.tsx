"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "../types";
import { ProductCard } from "./ProductCard";

export interface ProductDetailProps {
  product: Product;
  relatedProducts?: Product[];
}

export function ProductDetail({
  product,
  relatedProducts = [],
}: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const handleAddToCart = () => {
    if (!product.inStock) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/Product" className="hover:text-white transition">
            Catalog
          </Link>
          <span>/</span>
          <span className="text-zinc-200">{product.name}</span>
        </div>

        {/* Product Hero Section */}
        <div className="grid lg:grid-cols-12 gap-10 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          {/* Left Column: Image Preview Gallery */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center p-8 overflow-hidden group">
              <img
                src={images[selectedImage] || product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />

              {product.featured && (
                <span className="absolute top-4 right-4 bg-white text-black text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  Featured
                </span>
              )}
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 mt-4">
                {images.map((img, idx) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 rounded-xl bg-zinc-950 border p-2 flex items-center justify-center transition ${
                      selectedImage === idx
                        ? "border-white ring-2 ring-white/20"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Information & Purchase */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-black bg-white px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    product.inStock
                      ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                      : "bg-zinc-800 text-zinc-500 border border-zinc-700"
                  }`}
                >
                  {product.inStock
                    ? "In Stock — Ready for Dispatch"
                    : "Temporarily Sold Out"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={`detail-star-${i + 1}`}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-current"
                          : "text-zinc-700"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-zinc-300 text-sm font-semibold">
                  {product.rating} ({product.reviewsCount} customer reviews)
                </span>
              </div>

              {/* Pricing Display */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                  Official Kenyan Retail Price
                </span>
                <p className="text-3xl sm:text-4xl font-black text-white mt-0.5">
                  KSh {product.price.toLocaleString()}
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Inclusive of all statutory taxes. M-Pesa Express verified.
                </p>
              </div>

              {/* Description */}
              {product.desc && (
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {product.desc}
                </p>
              )}
            </div>

            {/* Actions & Quantity */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Quantity:
                </span>
                <div className="flex items-center border border-zinc-700 bg-zinc-950 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    disabled={quantity <= 1 || !product.inStock}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1.5 text-zinc-400 hover:text-white disabled:opacity-40 transition"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-sm font-bold text-white min-w-[2.5rem] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    disabled={!product.inStock}
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1.5 text-zinc-400 hover:text-white disabled:opacity-40 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                  className={`py-3.5 px-6 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition shadow-lg ${
                    !product.inStock
                      ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                      : added
                        ? "bg-emerald-600 text-white"
                        : "bg-white hover:bg-zinc-200 text-black"
                  }`}
                >
                  {added ? (
                    <>
                      <svg
                        className="w-5 h-5"
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
                      <span>Added to Cart ({quantity})</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
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
                      <span>
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </span>
                    </>
                  )}
                </button>

                <Link
                  href="/Contact"
                  className="py-3.5 px-6 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold text-sm border border-zinc-800 flex items-center justify-center gap-2 transition"
                >
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span>Inquire / Pay with M-Pesa</span>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800 text-center">
                <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <span className="block text-[11px] font-bold text-white">
                    100% Genuine
                  </span>
                  <span className="text-[10px] text-zinc-400">
                    Authentic Brand
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <span className="block text-[11px] font-bold text-white">
                    Official Warranty
                  </span>
                  <span className="text-[10px] text-zinc-400">
                    Manufacturer Cover
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <span className="block text-[11px] font-bold text-white">
                    Fast Delivery
                  </span>
                  <span className="text-[10px] text-zinc-400">47 Counties</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table (if available) */}
        {product.specs && Object.keys(product.specs).length > 0 && (
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {Object.entries(product.specs).map(([key, val]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm"
                >
                  <span className="text-zinc-400 font-semibold">{key}</span>
                  <span className="text-white font-bold text-right ml-4">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  More In {product.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  You May Also Like
                </h2>
              </div>
              <Link
                href="/Product"
                className="text-xs font-bold text-zinc-400 hover:text-white transition"
              >
                View Catalog →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
