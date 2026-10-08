import Link from "next/link";
import Carousel from "@/components/Carousel";
import About from "@/components/landing/About";
import ContactUs from "@/components/landing/ContactUs";
import HeroSection from "@/components/landing/HeroSection";
import WhyUs from "@/components/landing/WhyUs";
import { getFeaturedProducts } from "@/features/product";

export default function Home() {
  const featuredItems = getFeaturedProducts();

  return (
    <main className="bg-white dark:bg-black text-slate-900 dark:text-white min-h-screen font-sans transition-colors duration-300">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-zinc-900">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-400">
              Featured Showcase
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
              Flagship Tech Selection
            </h2>
          </div>

          <Link
            href="/Product"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-black font-extrabold text-xs shadow-md transition"
          >
            <span>View Full Product Catalog</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4"
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

        <Carousel products={featuredItems} />
      </section>

      {/* Why Us Teaser */}
      <WhyUs />

      {/* About Teaser */}
      <About />

      {/* Contact Section */}
      <ContactUs />
    </main>
  );
}
