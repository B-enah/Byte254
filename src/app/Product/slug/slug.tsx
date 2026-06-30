// app/products/[slug]/page.tsx
"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const products = [
  { id: 1, name: "MacBook Pro M3", price: 245000, category: "Laptops", image: "💻", slug: "macbook-pro-m3", desc: "Apple's latest M3 chip with incredible performance.", images: ["💻", "🖥️", "⌨️"], rating: 4.8 },
  { id: 2, name: "Samsung Galaxy S24 Ultra", price: 189000, category: "Phones", image: "📱", slug: "samsung-s24-ultra", desc: "Premium Android with AI features.", images: ["📱", "📸", "🖊️"], rating: 4.7 },
  { id: 3, name: "Sony WH-1000XM5", price: 38000, category: "Audio", image: "🎧", slug: "sony-wh-1000xm5", desc: "Industry-leading noise cancellation.", images: ["🎧", "🎵", "📱"], rating: 4.9 },
  { id: 4, name: "iPad Pro 12.9", price: 145000, category: "Tablets", image: "📟", slug: "ipad-pro-129", desc: "Professional tablet with M2 chip.", images: ["📟", "✏️", "🖥️"], rating: 4.6 },
  { id: 5, name: "Dell XPS 15", price: 198000, category: "Laptops", image: "💻", slug: "dell-xps-15", desc: "Premium Windows laptop with 4K display.", images: ["💻", "🖥️", "⌨️"], rating: 4.5 },
  { id: 6, name: "iPhone 15 Pro Max", price: 210000, category: "Phones", image: "📱", slug: "iphone-15-pro-max", desc: "Apple's most advanced iPhone.", images: ["📱", "📸", "🔋"], rating: 4.9 },
];

const getProduct = (slug: string) => products.find(p => p.slug === slug);

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [idx, setIdx] = useState(0);
  const product = getProduct(params.slug);
  if (!product) return notFound();

  const images = product.images || [product.image];
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/products" className="text-blue-600 hover:underline text-sm">← Back to Products</Link>

        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl p-6 shadow-lg mt-4">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="text-8xl">{images[idx]}</div>
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} 
                        className={`w-2 h-2 rounded-full ${i === idx ? 'bg-blue-600 w-4' : 'bg-gray-300'}`} />
              ))}
            </div>
          </div>

          <div>
            <span className="text-blue-600 text-sm font-bold uppercase">{product.category}</span>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
            <div className="text-yellow-400">{"★".repeat(Math.round(product.rating))}</div>
            <p className="text-3xl font-bold text-blue-600 mt-2">KSh {product.price.toLocaleString()}</p>
            <p className="text-gray-600 my-4">{product.desc}</p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Add to Cart 🛒</button>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">Related</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map(p => (
                <Link key={p.id} href={`/products/${p.slug}`} className="bg-white p-4 rounded-xl shadow hover:shadow-md">
                  <div className="text-4xl text-center">{p.image}</div>
                  <p className="font-semibold text-sm mt-2">{p.name}</p>
                  <p className="text-blue-600 font-bold text-sm">KSh {p.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}