"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const productsDatabase = [
  { id: 1, name: "MacBook Pro M3", category: "Laptops", price: "KSh 245,000", image: "/products/macbook-pro.png" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", category: "Phones", price: "KSh 189,000", image: "/products/samsung-s24.png" },
  { id: 3, name: "Sony WH-1000XM5 Headphones", category: "Audio", price: "KSh 38,000", image: "/products/sony-xm5.png" },
  { id: 4, name: "iPhone 15 Pro Max Titanium", category: "Phones", price: "KSh 210,000", image: "/products/iphone-15.png" },
  { id: 5, name: "PlayStation 5 Console", category: "Gaming", price: "KSh 85,000", image: "/products/ps5-console.png" },
  { id: 6, name: "Dell XPS 15 Touch Edition", category: "Laptops", price: "KSh 198,000", image: "/products/macbook-pro.png" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pathname = usePathname();
  const router = useRouter();

  // Initialize theme mode
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Theme Function
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
  };

  const filteredSearchProducts = searchQuery.trim() === "" 
    ? productsDatabase 
    : productsDatabase.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()));

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/Product' },
    { label: 'Why Us', href: '/WhyUs' },
    { label: 'About Us', href: '/About' },
    { label: 'Contact', href: '/Contact' },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-zinc-800 py-3' 
            : 'bg-white/80 dark:bg-black/70 backdrop-blur-sm border-b border-slate-100 dark:border-zinc-900 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Brand */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            <Link href="/" className="group flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black text-lg shadow-xs group-hover:scale-105 transition-transform duration-200">
                B
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Byte<span className="bg-black dark:bg-white text-white dark:text-black text-sm font-black px-2 py-0.5 rounded-md ml-1">254</span>
              </span>
            </Link>
          </div>

          {/* Center Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-zinc-900/80 p-1.5 rounded-full border border-slate-200 dark:border-zinc-800 backdrop-blur-xs">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive 
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-xs' 
                      : 'text-slate-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-800'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Trigger Button */}
            <button 
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-zinc-300 hover:text-black dark:hover:text-white px-3 py-2 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-800 transition"
              aria-label="Open Search"
            >
              <svg className="w-4 h-4 text-slate-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden sm:inline">Search</span>
            </button>

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-800 transition-all duration-200"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme Mode"
            >
              {isDarkMode ? (
                <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Cart Link */}
            <Link href="/Product" className="relative group p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-800 transition-all duration-200">
              <svg className="w-4 h-4 text-slate-900 dark:text-white group-hover:scale-105 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-black px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Interactive Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center pt-16 px-4 animate-fadeIn">
          <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-slate-900 dark:text-white space-y-0">
            
            {/* Search Input Field Header */}
            <div className="p-4 border-b border-slate-200 dark:border-zinc-800 flex items-center gap-3">
              <svg className="w-5 h-5 text-slate-400 dark:text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              <input
                type="text"
                autoFocus
                placeholder="Search MacBook, iPhone, PS5, Sony headphones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSearchOpen(false);
                    router.push('/Product');
                  }
                }}
                className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 text-base font-medium focus:outline-none"
              />

              <button 
                onClick={() => setSearchOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Results Grid */}
            <div className="max-h-96 overflow-y-auto p-4 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                Matching Tech Items ({filteredSearchProducts.length})
              </div>

              {filteredSearchProducts.length > 0 ? (
                filteredSearchProducts.map((p) => (
                  <Link
                    key={p.id}
                    href="/Product"
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 transition border border-transparent hover:border-slate-200 dark:hover:border-zinc-700"
                  >
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.name} className="w-10 h-10 object-contain rounded-lg bg-slate-100 dark:bg-black p-1" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{p.name}</h4>
                        <span className="text-xs text-slate-500 dark:text-zinc-400">{p.category}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-black text-slate-900 dark:text-white">{p.price}</span>
                      <span className="block text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">In Stock</span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-8 text-center text-slate-500 dark:text-zinc-400 text-sm">
                  No tech products found matching "{searchQuery}".
                </div>
              )}
            </div>

            {/* Search Footer */}
            <div className="p-3 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 text-center">
              <Link 
                href="/Product" 
                onClick={() => setSearchOpen(false)} 
                className="text-xs font-bold text-slate-700 dark:text-zinc-300 hover:underline"
              >
                View all products in full catalog →
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
}