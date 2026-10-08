export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  slug: string;
  rating: number;
  reviewsCount: number;
  featured: boolean;
  inStock: boolean;
  desc?: string;
  images?: string[];
  specs?: Record<string, string>;
}

export type ProductCategory =
  | "All"
  | "Laptops"
  | "Phones"
  | "Audio"
  | "Tablets"
  | "Gaming";

export interface ProductFiltersState {
  category: string;
  search: string;
}
