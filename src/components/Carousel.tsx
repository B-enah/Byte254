"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Product } from "@/features/product/types";

export interface CarouselProps {
  products: Product[];
}

export default function Carousel({ products }: CarouselProps) {
  const [idx, setIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!products.length || isPaused) return;
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length, isPaused]);

  if (!products.length) return null;

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-xl border border-zinc-800 h-64 sm:h-72 font-sans group"
    >
      {products.map((p, i) => (
        <div
          key={p.id}
          className={`absolute inset-0 flex items-center justify-between px-6 sm:px-12 text-white transition-all duration-700 ${
            i === idx
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-95 pointer-events-none z-0"
          }`}
        >
          <div className="max-w-md space-y-2 z-10">
            <span className="inline-block text-[11px] font-black uppercase tracking-wider text-black bg-white px-2.5 py-0.5 rounded-full">
              Flagship Showcase
            </span>
            <h3 className="font-extrabold text-xl sm:text-3xl text-white tracking-tight">
              {p.name}
            </h3>
            <p className="text-2xl sm:text-3xl font-black text-white">
              KSh {p.price.toLocaleString()}
            </p>

            <Link
              href={p.slug ? `/Product/${p.slug}` : "/Product"}
              className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-extrabold transition shadow-md"
            >
              <span>View Product Details</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          <div className="relative h-44 sm:h-56 w-48 sm:w-80 flex items-center justify-center">
            {p.image ? (
              <img
                src={p.image}
                alt={p.name}
                className="max-h-full max-w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold">
                Tech
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={() =>
          setIdx((prev) => (prev === 0 ? products.length - 1 : prev - 1))
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/80 border border-zinc-700 hover:bg-zinc-800 text-white backdrop-blur-md transition shadow-lg opacity-80 group-hover:opacity-100"
        aria-label="Previous Slide"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => setIdx((prev) => (prev + 1) % products.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/80 border border-zinc-700 hover:bg-zinc-800 text-white backdrop-blur-md transition shadow-lg opacity-80 group-hover:opacity-100"
        aria-label="Next Slide"
      >
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {products.map((p, i) => (
          <button
            key={`dot-${p.id || i}`}
            type="button"
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "w-6 bg-white" : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
