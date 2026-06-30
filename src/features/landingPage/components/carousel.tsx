// components/Carousel.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CarouselProps {
  products: any[];
}

export default function Carousel({ products }: CarouselProps) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx(prev => (prev + 1) % products.length), 4000);
    return () => clearInterval(timer);
  }, [products.length]);

  if (!products.length) return null;

  return (
    <div className="relative bg-blue-600 rounded-xl overflow-hidden mb-6 h-48 md:h-56">
      {products.map((p, i) => (
        <Link key={p.id} href={`/products/${p.slug}`}>
          <div className={`absolute inset-0 flex items-center justify-center gap-6 px-6 text-white transition-all duration-700
            ${i === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <span className="text-6xl md:text-7xl">{p.image}</span>
            <div>
              <h3 className="font-bold text-lg">{p.name}</h3>
              <p className="text-xl font-bold">KSh {p.price.toLocaleString()}</p>
            </div>
          </div>
        </Link>
      ))}
      
      <button onClick={() => setIdx(prev => (prev + 1) % products.length)} 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 px-2 py-1 rounded text-white">→</button>
      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {products.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} 
                  className={`h-1 rounded-full transition-all ${i === idx ? "w-4 bg-white" : "w-1 bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}