import type { Product } from "../types";

export const productsDatabase: Product[] = [
  {
    id: 1,
    name: "MacBook Pro M3",
    price: 245000,
    category: "Laptops",
    image: "/products/macbook-pro.png",
    slug: "macbook-pro-m3",
    rating: 4.8,
    reviewsCount: 34,
    featured: true,
    inStock: true,
    desc: "Apple's flagship laptop supercharged by the revolutionary M3 processor, featuring stunning Liquid Retina XDR display, up to 22 hours of battery life, and pro-level audio and connectivity.",
    images: ["/products/macbook-pro.png"],
    specs: {
      Processor: "Apple M3 Chip (8-core CPU, 10-core GPU)",
      Memory: "16GB Unified Memory",
      Storage: "512GB High-speed SSD",
      Display: "14.2-inch Liquid Retina XDR Display",
      Battery: "Up to 22 hours",
      Warranty: "1 Year Official Apple Warranty",
    },
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 189000,
    category: "Phones",
    image: "/products/samsung-s24.png",
    slug: "samsung-s24-ultra",
    rating: 4.7,
    reviewsCount: 52,
    featured: true,
    inStock: true,
    desc: "The pinnacle of smartphone innovation equipped with Galaxy AI, a 200MP camera system, embedded S Pen, titanium chassis, and the Snapdragon 8 Gen 3 for unmatched speed.",
    images: ["/products/samsung-s24.png"],
    specs: {
      Display: "6.8-inch Dynamic AMOLED 2X, 120Hz",
      Processor: "Snapdragon 8 Gen 3 for Galaxy",
      Camera: "200MP Main + 50MP Periscope + 12MP Ultrawide",
      Battery: "5,000 mAh with 45W Fast Charging",
      Build: "Titanium Frame with Gorilla Glass Armor",
      Warranty: "2 Years Samsung East Africa Warranty",
    },
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: 38000,
    category: "Audio",
    image: "/products/sony-xm5.png",
    slug: "sony-wh-1000xm5",
    rating: 4.9,
    reviewsCount: 88,
    featured: true,
    inStock: true,
    desc: "Industry-leading noise cancellation powered by dual processors and eight microphones. Experience pristine high-resolution audio, crystal-clear hands-free calls, and 30 hours of continuous playback.",
    images: ["/products/sony-xm5.png"],
    specs: {
      NoiseCancellation:
        "Industry-leading Active Noise Cancellation (dual processor)",
      BatteryLife: "30 hours with ANC on (up to 40 hours ANC off)",
      Connectivity: "Bluetooth 5.2, Multipoint connection, 3.5mm jack",
      Weight: "250g ultra-light comfort headband",
      Warranty: "1 Year Official Sony Warranty",
    },
  },
  {
    id: 4,
    name: "iPhone 15 Pro Max Titanium",
    price: 210000,
    category: "Phones",
    image: "/products/iphone-15.png",
    slug: "iphone-15-pro-max",
    rating: 4.9,
    reviewsCount: 96,
    featured: true,
    inStock: true,
    desc: "Forged in aerospace-grade titanium, featuring the groundbreaking A17 Pro chip, customizable Action button, the most versatile iPhone camera system ever with 5x optical zoom, and USB-C speed.",
    images: ["/products/iphone-15.png"],
    specs: {
      Chip: "A17 Pro chip with 6-core GPU",
      Display: "6.7-inch Super Retina XDR with ProMotion 120Hz",
      Camera: "48MP Main + 12MP 5x Telephoto + 12MP Ultrawide",
      Connector: "USB-C with USB 3 speeds (up to 10Gb/s)",
      Warranty: "1 Year Official Apple Warranty",
    },
  },
  {
    id: 5,
    name: "PlayStation 5 Console",
    price: 85000,
    category: "Gaming",
    image: "/products/ps5-console.png",
    slug: "ps5-console",
    rating: 4.8,
    reviewsCount: 41,
    featured: false,
    inStock: true,
    desc: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback, adaptive triggers, 3D Audio, and an incredible collection of next-gen PlayStation games.",
    images: ["/products/ps5-console.png"],
    specs: {
      Storage: "Custom 825GB Ultra-High Speed NVMe SSD",
      Graphics: "AMD Radeon RDNA 2-based graphics engine with Ray Tracing",
      Resolution: "Support for 4K 120Hz TVs, 8K output, VRR",
      Controller: "DualSense Wireless Controller with Haptic Feedback",
      Warranty: "1 Year Sony Warranty",
    },
  },
  {
    id: 6,
    name: "Dell XPS 15 Touch Edition",
    price: 198000,
    category: "Laptops",
    image: "/products/macbook-pro.png",
    slug: "dell-xps-15",
    rating: 4.5,
    reviewsCount: 19,
    featured: false,
    inStock: true,
    desc: "A masterclass in performance and design. Packed with a 13th Gen Intel Core i7, NVIDIA GeForce RTX graphics, and an immersive 3.5K OLED InfinityEdge touch display.",
    images: ["/products/macbook-pro.png"],
    specs: {
      Processor: "13th Gen Intel Core i7-13700H (14 cores)",
      Graphics: "NVIDIA GeForce RTX 4060 8GB GDDR6",
      Memory: "32GB DDR5 4800MHz",
      Display: "15.6-inch 3.5K (3456 x 2160) OLED Touch Display",
      Warranty: "1 Year Dell ProSupport",
    },
  },
  {
    id: 7,
    name: "MacBook Air M2 Starlight",
    price: 165000,
    category: "Laptops",
    image: "/products/macbook-pro.png",
    slug: "macbook-air-m2",
    rating: 4.7,
    reviewsCount: 27,
    featured: false,
    inStock: true,
    desc: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency inside a durable all-aluminum enclosure.",
    images: ["/products/macbook-pro.png"],
    specs: {
      Processor: "Apple M2 Chip with 8-core CPU and 10-core GPU",
      Memory: "8GB Unified Memory",
      Storage: "256GB SSD Storage",
      Display: "13.6-inch Liquid Retina Display with True Tone",
      Weight: "1.24 kg lightweight design",
      Warranty: "1 Year Apple Warranty",
    },
  },
  {
    id: 8,
    name: "iPad Pro 12.9 M2 Chip",
    price: 145000,
    category: "Tablets",
    image: "/products/iphone-15.png",
    slug: "ipad-pro-129",
    rating: 4.6,
    reviewsCount: 15,
    featured: false,
    inStock: false,
    desc: "Astonishing performance with M2 chip, Liquid Retina XDR display with extreme dynamic range, ultra-fast wireless connectivity, Apple Pencil hover, and iPadOS desktop-class features.",
    images: ["/products/iphone-15.png"],
    specs: {
      Display: "12.9-inch Liquid Retina XDR mini-LED Display",
      Chip: "Apple M2 Chip with 8-core CPU and 10-core GPU",
      Connectivity: "Wi-Fi 6E + 5G Cellular capability",
      Accessories: "Compatible with Apple Pencil (2nd gen) and Magic Keyboard",
      Warranty: "1 Year Apple Warranty",
    },
  },
];

export const productCategories: string[] = [
  "All",
  "Laptops",
  "Phones",
  "Audio",
  "Tablets",
  "Gaming",
];

export async function fetchProducts(): Promise<Product[]> {
  return productsDatabase;
}

export function getProductsSync(): Product[] {
  return productsDatabase;
}

export async function fetchProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  return productsDatabase.find((p) => p.slug === slug);
}

export function getProductBySlugSync(slug: string): Product | undefined {
  return productsDatabase.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return productsDatabase.filter((p) => p.featured);
}

export function getCategories(): string[] {
  return productCategories;
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return productsDatabase
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
