import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlugSync,
  getRelatedProducts,
  ProductDetail,
  productsDatabase,
} from "@/features/product";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return productsDatabase.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlugSync(slug);

  if (!product) {
    return {
      title: "Product Not Found — Byte254",
    };
  }

  return {
    title: `${product.name} — Byte254 Kenya`,
    description:
      product.desc ||
      `Buy genuine ${product.name} in Kenya. Official warranty and fast delivery to 47 counties.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlugSync(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 4);

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
