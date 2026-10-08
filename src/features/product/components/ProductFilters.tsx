"use client";

export interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalResults?: number;
}

export function ProductFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalResults,
}: ProductFiltersProps) {
  return (
    <div className="bg-zinc-900/90 backdrop-blur-md rounded-2xl border border-zinc-800 p-4 mb-8 shadow-xl">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                selectedCategory.toLowerCase() === category.toLowerCase()
                  ? "bg-white text-black shadow-md"
                  : "bg-black text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800"
              }`}
            >
              {category}
            </button>
          ))}
          {totalResults !== undefined && (
            <span className="text-xs font-semibold text-zinc-400 px-2 py-1">
              ({totalResults} {totalResults === 1 ? "item" : "items"})
            </span>
          )}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-80">
          <input
            type="text"
            placeholder="Search laptops, phones, gaming..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-2.5 pl-10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition"
          />
          <svg
            className="absolute left-3 top-3 w-4 h-4 text-zinc-500"
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
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-2.5 text-zinc-500 hover:text-zinc-300 text-xs p-1"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductFilters;
