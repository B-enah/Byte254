"use client";

import { useMemo, useState } from "react";
import { getCategories, getProductsSync } from "../services/productApi";

export interface UseProductsOptions {
  initialCategory?: string;
  initialSearch?: string;
}

export function useProducts(options: UseProductsOptions = {}) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    options.initialCategory || "All",
  );
  const [searchQuery, setSearchQuery] = useState<string>(
    options.initialSearch || "",
  );

  const allProducts = useMemo(() => getProductsSync(), []);
  const categories = useMemo(() => getCategories(), []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        Boolean(product.desc?.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [allProducts, selectedCategory, searchQuery]);

  const featuredProducts = useMemo(() => {
    return allProducts.filter((p) => p.featured);
  }, [allProducts]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return {
    products: filteredProducts,
    allProducts,
    featuredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    resetFilters,
    totalCount: allProducts.length,
    filteredCount: filteredProducts.length,
  };
}
